import React from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import AlignmentPlugin from '@ckeditor/ckeditor5-alignment/src/alignment'; 
import HighlightPlugin from '@ckeditor/ckeditor5-highlight/src/highlight';

import UnderlinePlugin from '@ckeditor/ckeditor5-basic-styles/src/underline';
import StrikethroughPlugin from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import IndentPlugin from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlockPlugin from '@ckeditor/ckeditor5-indent/src/indentblock';

import UploadAdapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResizePlugin from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import EasyImagePlugin from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import SimpleUploadAdapterPlugin from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

import FontPlugin from '@ckeditor/ckeditor5-font/src/font';
import HorizontalLinePlugin from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import MediaEmbedPlugin from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import BlockToolbarPlugin from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import HeadingButtonsUIPlugin from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import ParagraphButtonUIPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';
import BlockQuotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import TablePlugin from '@ckeditor/ckeditor5-table/src/table';
import TableToolbarPlugin from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import WordCountPlugin from '@ckeditor/ckeditor5-word-count/src/wordcount';

import CodeBlockPlugin from '@ckeditor/ckeditor5-code-block/src/codeblock';

import { Cookies } from '../../service/ApiService';
import { EditType } from './enum/EditType'
import './CKEditor.css';

export default function CKEditorComponent(props) {

  const data = props.data;
  const cType = props.type;

  const setCharCount = (count) => {
    const propsCount = props.charCount;

    if(typeof propsCount === "function"){
      propsCount(count);
    }
  }

  const setContent = (content) => {
    const propsContent = props.content;

    if(typeof propsContent === "function"){
      propsContent(content);
    }
  }

  let apiUrl = "";

  if(process.env.NODE_ENV === "production"){
      apiUrl = "https://api.devj.io";
  }else{
      apiUrl = "http://localhost:8080";
  }

  const builtinPlugins = [
    EasyImagePlugin,
    SimpleUploadAdapterPlugin,
    ImageUploadPlugin,
    UploadAdapterPlugin,
    BlockQuotePlugin,
    CodeBlockPlugin,
    ParagraphButtonUIPlugin,
    HeadingButtonsUIPlugin,
    BlockToolbarPlugin,
    IndentPlugin,
    IndentBlockPlugin,
    StrikethroughPlugin,
    UnderlinePlugin,
    WordCountPlugin,
    TablePlugin,
    TableToolbarPlugin,
    EssentialsPlugin,
    ImagePlugin,
    ImageToolbarPlugin,
    ImageCaptionPlugin,
    ImageStylePlugin,
    ImageResizePlugin,
    AutoformatPlugin,
    AlignmentPlugin,
    HighlightPlugin,
    HorizontalLinePlugin,
    FontPlugin,
    BoldPlugin,
    ItalicPlugin,
    HeadingPlugin,
    LinkPlugin,
    ListPlugin,
    ParagraphPlugin,
    MediaEmbedPlugin
  ];

  let blockToolbarConfig = {
    items: [
      'paragraph', 
      'heading1', 
      'heading2', 
      'heading3',
      'bulletedList', 
      'numberedList',
      'blockQuote', 
      'italic', 
      'underline', 
      'horizontalLine', 
      'strikethrough', 
      'fontColor', 
      'fontBackgroundColor',
      'imageUpload',
    ],
    
    shouldNotGroupWhenFull: false
  };

  let defaultConfig = [ 
    'heading',
    'bold',
    'alignment',
    'imageUpload',
    'mediaEmbed', 
    'insertTable', 
    'codeBlock', 
    'blockQuote',
    'link', 
    'outdent', 
    'indent', 
    'bulletedList', 
    'numberedList', 
    'fontSize', 
    'undo', 
    'redo',
  ];

  const imageConfig = {
    toolbar: [
      'imageTextAlternative', 
      'imageStyle:full', 
      'imageStyle:side',
    ]
  }

  const tableConfig = {
    contentToolbar: [ 
      'tableColumn', 
      'tableRow', 
      'mergeTableCells' 
    ]
  }

  const simpleUpload= {
    uploadUrl: `${apiUrl}/attach/post/image`,

    headers: {
      'X-Auth-Token': Cookies.get("X_AUTH_TOKEN")
    }
  }

  const fontSizeConfig = {
    options: [
        9,
        11,
        13,
        'default',
        17,
        19,
        21,
        24,
        27,
        30
    ]
  }

  let initType = false;

  if(cType === EditType.Read){
    defaultConfig = [];
    blockToolbarConfig = {};
    initType = true;
  }
  
  // eslint-disable-next-line
  const [readOnly, setReadOnly] = React.useState(initType);
  
  const editorConfiguration = {
    plugins: builtinPlugins,
    toolbar: defaultConfig,
    image: imageConfig,
    fontSize: fontSizeConfig,
    table: tableConfig,
    wordCount: {
      onUpdate: stats => {
        setCharCount(stats.characters)
      }
    },
    blockToolbar: blockToolbarConfig,
    simpleUpload: simpleUpload,
  }

  const isReadOnly = () => {
    return readOnly;
  }



  return (
    <CKEditor         
      data={data}
      onInit={ (editor) => {
        editor.isReadOnly = isReadOnly();
      }}
      editor={ClassicEditorBase}
      config={editorConfiguration}
      onChange={ ( event, editor ) => {
        setContent(editor.getData());
      }} />
  );
}
