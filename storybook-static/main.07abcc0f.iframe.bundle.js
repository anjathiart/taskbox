(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{165:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue_esm_bundler=__webpack_require__(15);const _hoisted_1={class:"checkbox"},_hoisted_2=["checked"],_hoisted_3={class:"title"},_hoisted_4=["value"],_hoisted_5={class:"actions"},_hoisted_7=[Object(vue_esm_bundler.createElementVNode)("span",{class:"icon-star"},null,-1)];__webpack_require__(9);var Taskvue_type_script_lang_js={name:"Task",props:{task:{type:Object,required:!0,default:function _default(){return{id:"",state:"",title:""}},validator:function validator(task){return["id","state","title"].every((function(key){return key in task}))}}},emits:["archive-task","pin-task"],setup:function setup(props,_ref){var emit=_ref.emit;return props=Object(vue_esm_bundler.reactive)(props),{classes:Object(vue_esm_bundler.computed)((function(){return{"list-item TASK_INBOX":"TASK_INBOX"===props.task.state,"list-item TASK_PINNED":"TASK_PINNED"===props.task.state,"list-item TASK_ARCHIVED":"TASK_ARCHIVED"===props.task.state}})),isChecked:Object(vue_esm_bundler.computed)((function(){return"TASK_ARCHIVED"===props.task.state})),archiveTask:function archiveTask(){emit("archive-task",props.task.id)},pinTask:function pinTask(){emit("pin-task",props.task.id)}}}},exportHelper=__webpack_require__(219);const __vuedocgen_export_0=__webpack_require__.n(exportHelper)()(Taskvue_type_script_lang_js,[["render",function render(_ctx,_cache,$props,$setup,$data,$options){return Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createElementBlock)("div",{class:Object(vue_esm_bundler.normalizeClass)($setup.classes)},[Object(vue_esm_bundler.createElementVNode)("label",_hoisted_1,[Object(vue_esm_bundler.createElementVNode)("input",{type:"checkbox",checked:$setup.isChecked,disabled:"",name:"checked"},null,8,_hoisted_2),Object(vue_esm_bundler.createElementVNode)("span",{class:"checkbox-custom",onClick:_cache[0]||(_cache[0]=(...args)=>$setup.archiveTask&&$setup.archiveTask(...args))})]),Object(vue_esm_bundler.createElementVNode)("div",_hoisted_3,[Object(vue_esm_bundler.createElementVNode)("input",{type:"text",value:$props.task.title,readonly:"",placeholder:"Input title"},null,8,_hoisted_4)]),Object(vue_esm_bundler.createElementVNode)("div",_hoisted_5,[$setup.isChecked?Object(vue_esm_bundler.createCommentVNode)("",!0):(Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createElementBlock)("a",{key:0,onClick:_cache[1]||(_cache[1]=(...args)=>$setup.pinTask&&$setup.pinTask(...args))},_hoisted_7))])],2)}]]);__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"Task",exportName:"default",description:"",tags:{},props:[{name:"task",type:{name:"object"},required:!0,defaultValue:{func:!1,value:" id: '', state: '', title: '' "}}],events:[{name:"archive-task"},{name:"pin-task"}]}},470:function(module,exports,__webpack_require__){__webpack_require__(471),__webpack_require__(626),__webpack_require__(627),__webpack_require__(824),__webpack_require__(829),__webpack_require__(831),__webpack_require__(832),__webpack_require__(830),__webpack_require__(825),__webpack_require__(833),__webpack_require__(826),__webpack_require__(827),__webpack_require__(834),module.exports=__webpack_require__(822)},537:function(module,exports){},627:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(205)},812:function(module,exports,__webpack_require__){var api=__webpack_require__(813),content=__webpack_require__(814);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},814:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(815),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__(816),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__(817),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__(818),___CSS_LOADER_URL_IMPORT_2___=__webpack_require__(819),___CSS_LOADER_URL_IMPORT_3___=__webpack_require__(820),___CSS_LOADER_URL_IMPORT_4___=__webpack_require__(821);exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___,{hash:"?#iefix5w3um4"}),___CSS_LOADER_URL_REPLACEMENT_2___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___),___CSS_LOADER_URL_REPLACEMENT_4___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);exports.push([module.i,' /* Reset.less\n * Props to Eric Meyer (meyerweb.com) for his CSS reset file. We\'re using an adapted version here\tthat cuts out some of the reset HTML elements we will never need here (i.e., dfn, samp, etc).\n * ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */\n html,\n body {\n   margin: 0;\n   padding: 0;\n }\n h1,\n h2,\n h3,\n p,\n a,\n s,\n small,\n strong,\n li,\n ul,\n label,\n button {\n   margin: 0;\n   padding: 0;\n   border: 0;\n   font-weight: normal;\n   font-style: normal;\n   font-size: 100%;\n   line-height: 1;\n   font-family: inherit;\n }\n \n ul {\n   list-style: none;\n }\n html {\n   font-size: 100%;\n   -webkit-text-size-adjust: 100%;\n   -ms-text-size-adjust: 100%;\n }\n a:focus {\n   outline: thin dotted;\n }\n a:hover,\n a:active {\n   outline: 0;\n }\n article,\n header,\n section {\n   display: block;\n }\n \n canvas {\n   display: inline-block;\n   *display: inline;\n   *zoom: 1;\n }\n button,\n input {\n   font-size: 100%;\n   margin: 0;\n   vertical-align: baseline;\n   *vertical-align: middle;\n }\n button,\n input {\n   line-height: normal;\n   *overflow: visible;\n }\n button::-moz-focus-inner,\n input::-moz-focus-inner {\n   border: 0;\n   padding: 0;\n }\n button,\n input[type="button"] {\n   cursor: pointer;\n   -webkit-appearance: button;\n }\n @keyframes spin {\n   0% {\n     transform: rotate(0deg);\n   }\n   100% {\n     transform: rotate(359deg);\n   }\n }\n @keyframes glow {\n   0%,\n   100% {\n     opacity: 1;\n   }\n   50% {\n     opacity: 0.5;\n   }\n }\n @font-face {\n   font-family: \'Nunito Sans\';\n   font-style: italic;\n   font-weight: 400;\n   src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe0oMImSLYBIv1o4X1M8cce4E9lKcw.ttf) format(\'truetype\');\n }\n @font-face {\n   font-family: \'Nunito Sans\';\n   font-style: normal;\n   font-weight: 400;\n   src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cce9I94.ttf) format(\'truetype\');\n }\n @font-face {\n   font-family: \'Nunito Sans\';\n   font-style: normal;\n   font-weight: 800;\n   src: url(https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8aBc5tU1Q.ttf) format(\'truetype\');\n }\n * {\n   box-sizing: border-box;\n   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n   -webkit-tap-highlight-color: transparent;\n }\n html,\n button,\n input {\n   outline: none;\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n }\n body {\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-style: 400;\n   color: #333;\n   font-size: 16px;\n   background-color: #26c6da;\n }\n h1,\n h2,\n h3 {\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-style: 400;\n   margin: 0;\n   padding: 0;\n }\n h1 {\n   font-size: 40px;\n   line-height: 48px;\n }\n h2 {\n   font-size: 28px;\n   line-height: 32px;\n }\n h3 {\n   font-size: 24px;\n   line-height: 28px;\n }\n p {\n   font-size: 16px;\n   line-height: 24px;\n }\n input[type="text"] {\n   font-size: 14px;\n   line-height: 20px;\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-style: 400;\n   padding: 0.75rem 0;\n   line-height: 1.5rem !important;\n   border: none;\n   border-radius: 0;\n   box-sizing: border-box;\n   color: #333;\n   outline: none;\n }\n input[type="text"] ::placeholder {\n   color: #778b91;\n }\n input[type="text"][disabled] {\n   opacity: 0.5;\n }\n input:-webkit-autofill {\n   -webkit-box-shadow: 0 0 0 1000px white inset;\n }\n .checkbox {\n   display: inline-block;\n   height: 3rem;\n   position: relative;\n   vertical-align: middle;\n   width: 44px;\n }\n .checkbox input[type="checkbox"] {\n   font-size: 1em;\n   visibility: hidden;\n }\n .checkbox input[type="checkbox"] + span:before {\n   position: absolute;\n   top: 50%;\n   right: auto;\n   bottom: auto;\n   left: 50%;\n   width: 0.85em;\n   height: 0.85em;\n   transform: translate3d(-50%, -50%, 0);\n   background: transparent;\n   box-shadow: #2cc5d2 0 0 0 1px inset;\n   content: \'\';\n   display: block;\n }\n .checkbox input[type="checkbox"]:checked + span:before {\n   font-size: 16px;\n   line-height: 24px;\n   box-shadow: none;\n   color: #2cc5d2;\n   margin-top: -1px;\n   font-family: \'percolate\';\n   speak: none;\n   font-style: normal;\n   font-weight: normal;\n   font-variant: normal;\n   text-transform: none;\n   line-height: 1;\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n   content: "\\e65e";\n }\n @font-face {\n   font-family: "percolate";\n   src: url('+___CSS_LOADER_URL_REPLACEMENT_0___+");\n   src: url("+___CSS_LOADER_URL_REPLACEMENT_1___+') format("embedded-opentype"),\n     url('+___CSS_LOADER_URL_REPLACEMENT_2___+') format("woff"),\n     url('+___CSS_LOADER_URL_REPLACEMENT_3___+') format("truetype"),\n     url('+___CSS_LOADER_URL_REPLACEMENT_4___+') format("svg");\n   font-weight: normal;\n   font-style: normal;\n }\n [class^="icon-"],\n [class*=" icon-"] {\n   font-family: "percolate";\n   speak: none;\n   font-style: normal;\n   font-weight: normal;\n   font-variant: normal;\n   text-transform: none;\n   line-height: 1;\n   /* Better Font Rendering =========== */\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n }\n .icon-star:before {\n   content: "\\e608";\n }\n .icon-check:before {\n   content: "\\e65e";\n }\n a {\n   transition: all 200ms ease-in;\n   color: #5db9ff;\n   cursor: pointer;\n   text-decoration: none;\n }\n a:hover {\n   color: #239da8;\n }\n a:active {\n   color: #555;\n }\n a:focus {\n   outline: none;\n }\n .list-item {\n   font-size: 14px;\n   line-height: 20px;\n   display: flex;\n   flex-wrap: wrap;\n   height: 3rem;\n   width: 100%;\n   background: white;\n   transition: all ease-out 150ms;\n }\n .list-item .title {\n   overflow: hidden;\n   text-overflow: ellipsis;\n   white-space: nowrap;\n   flex: 1;\n }\n .list-item input[type="text"] {\n   background: transparent;\n   width: 100%;\n }\n .list-item input[type="text"]:focus {\n   cursor: text;\n }\n .list-item .actions {\n   transition: all 200ms ease-in;\n   padding-right: 20px;\n }\n .list-item .actions a {\n   display: inline-block;\n   vertical-align: top;\n   text-align: center;\n   color: #eee;\n }\n .list-item .actions a:hover {\n   color: #2cc5d2;\n }\n .list-item .actions a:active {\n   color: #555;\n }\n .list-item .actions [class^="icon-"] {\n   font-size: 16px;\n   line-height: 24px;\n   line-height: 3rem;\n   text-align: center;\n }\n .list-item.TASK_PINNED .icon-star {\n   color: #2cc5d2;\n }\n .list-item.TASK_ARCHIVED input[type="text"] {\n   color: #aaa;\n }\n .list-item:hover {\n   background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);\n }\n .list-item:hover .checkbox {\n   cursor: pointer;\n }\n .list-item + .list-item {\n   border-top: 1px solid #f0f9fb;\n }\n .list-item.checked input[type="text"] {\n   color: #ccc;\n   text-decoration: line-through;\n }\n .loading-item {\n   height: 3rem;\n   width: 100%;\n   background: white;\n   display: flex;\n   align-items: center;\n   line-height: 1rem;\n   padding-left: 16px;\n }\n .loading-item .glow-checkbox,\n .loading-item .glow-text span {\n   animation: glow 1.5s ease-in-out infinite;\n   background: #eee;\n   color: transparent;\n   cursor: progress;\n   display: inline-block;\n }\n .loading-item .glow-checkbox {\n   margin-right: 16px;\n   width: 12px;\n   height: 12px;\n }\n .loading-item + .loading-item {\n   border-top: 1px solid #f0f9fb;\n }\n .list-items {\n   position: relative;\n   background: white;\n   min-height: 288px;\n }\n .wrapper-message {\n   position: absolute;\n   top: 45%;\n   right: 0;\n   bottom: auto;\n   left: 0;\n   width: auto;\n   height: auto;\n   transform: translate3d(0, -50%, 0);\n   text-align: center;\n }\n .wrapper-message [class^="icon-"],\n .wrapper-message [class*=" icon-"] {\n   font-size: 48px;\n   line-height: 56px;\n   color: #2cc5d2;\n   display: block;\n }\n .wrapper-message .title-message {\n   font-size: 16px;\n   line-height: 24px;\n   font-family: \'Nunito Sans\', "Helvetica Neue", Helvetica, Arial, sans-serif;\n   font-weight: 800;\n   color: #555;\n }\n .wrapper-message .subtitle-message {\n   font-size: 14px;\n   line-height: 20px;\n   color: #666;\n }',""]),module.exports=exports},817:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/percolate.944f04e6.eot"},818:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/percolate.944f04e6.eot"},819:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/percolate.19e89b87.woff"},820:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/percolate.fae78e19.ttf"},821:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/percolate.1527b5e7.svg"},822:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(205).configure)([__webpack_require__(823)],module,!1)}).call(this,__webpack_require__(199)(module))},823:function(module,exports,__webpack_require__){var map={"./PureTaskList.stories.js":828,"./Task.stories.js":95};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=823},828:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithPinnedTasks",(function(){return WithPinnedTasks})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));var toConsumableArray=__webpack_require__(164),vue_esm_bundler=(__webpack_require__(22),__webpack_require__(14),__webpack_require__(16),__webpack_require__(15));const _hoisted_1={class:"list-items"},_hoisted_4=[Object(vue_esm_bundler.createElementVNode)("span",{class:"glow-checkbox"},null,-1),Object(vue_esm_bundler.createElementVNode)("span",{class:"glow-text"},[Object(vue_esm_bundler.createElementVNode)("span",null,"Loading"),Object(vue_esm_bundler.createTextVNode)(),Object(vue_esm_bundler.createElementVNode)("span",null,"cool"),Object(vue_esm_bundler.createTextVNode)(),Object(vue_esm_bundler.createElementVNode)("span",null,"state")],-1)],_hoisted_5={key:1,class:"wrapper-message"},_hoisted_9=[Object(vue_esm_bundler.createElementVNode)("span",{class:"icon-check"},null,-1),Object(vue_esm_bundler.createElementVNode)("div",{class:"title-message"},"You have no tasks",-1),Object(vue_esm_bundler.createElementVNode)("div",{class:"subtitle-message"},"Sit back and relax",-1)];__webpack_require__(47),__webpack_require__(9);var PureTaskListvue_type_script_lang_js={name:"TaskList",components:{Task:__webpack_require__(165).a},props:{tasks:{type:Array,required:!0,default:function _default(){return[]}},loading:{type:Boolean,default:!1}},emits:["archive-task","pin-task"],setup:function setup(props,_ref){var emit=_ref.emit;return props=Object(vue_esm_bundler.reactive)(props),{isEmpty:Object(vue_esm_bundler.computed)((function(){return 0===props.tasks.length})),tasksInOrder:Object(vue_esm_bundler.computed)((function(){return[].concat(Object(toConsumableArray.a)(props.tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(toConsumableArray.a)(props.tasks.filter((function(t){return"TASK_PINNED"!==t.state}))))})),onArchiveTask:function onArchiveTask(taskId){emit("archive-task",taskId)},onPinTask:function onPinTask(taskId){emit("pin-task",taskId)}}}},exportHelper=__webpack_require__(219);const __exports__=__webpack_require__.n(exportHelper)()(PureTaskListvue_type_script_lang_js,[["render",function render(_ctx,_cache,$props,$setup,$data,$options){const _component_Task=Object(vue_esm_bundler.resolveComponent)("Task");return Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createElementBlock)("div",_hoisted_1,[$props.loading?(Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createElementBlock)(vue_esm_bundler.Fragment,{key:0},Object(vue_esm_bundler.renderList)(6,(n=>Object(vue_esm_bundler.createElementVNode)("div",{key:n,class:"loading-item"},_hoisted_4))),64)):$setup.isEmpty?(Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createElementBlock)("div",_hoisted_5,_hoisted_9)):(Object(vue_esm_bundler.openBlock)(!0),Object(vue_esm_bundler.createElementBlock)(vue_esm_bundler.Fragment,{key:2},Object(vue_esm_bundler.renderList)($setup.tasksInOrder,(task=>(Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createBlock)(_component_Task,{key:task.id,task:task,onArchiveTask:$setup.onArchiveTask,onPinTask:$setup.onPinTask},null,8,["task","onArchiveTask","onPinTask"])))),128))])}]]);var PureTaskList=__exports__;__exports__.__docgenInfo={displayName:"TaskList",exportName:"default",description:"",tags:{},props:[{name:"tasks",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"archive-task"},{name:"pin-task"}]};var Task_stories=__webpack_require__(95),PureTaskList_stories_Template=(__webpack_exports__.default={component:PureTaskList,title:"PureTaskList",decorators:[function(){return{template:'<div style="margin: 3em;"><story/></div>'}}],argTypes:{onPinTask:{},onArchiveTask:{}}},function Template(args){return{components:{PureTaskList:PureTaskList},setup:function setup(){return Object.assign({args:args},Task_stories.actionsData)},template:'<PureTaskList v-bind="args" />'}}),Default=PureTaskList_stories_Template.bind({});Default.args={tasks:[Object.assign({},Task_stories.Default.args.task,{id:"1",title:"Task 1"}),Object.assign({},Task_stories.Default.args.task,{id:"2",title:"Task 2"}),Object.assign({},Task_stories.Default.args.task,{id:"3",title:"Task 3"}),Object.assign({},Task_stories.Default.args.task,{id:"4",title:"Task 4"}),Object.assign({},Task_stories.Default.args.task,{id:"5",title:"Task 5"}),Object.assign({},Task_stories.Default.args.task,{id:"6",title:"Task 6"})]};var WithPinnedTasks=PureTaskList_stories_Template.bind({});WithPinnedTasks.args={tasks:[].concat(Object(toConsumableArray.a)(Default.args.tasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}])};var Loading=PureTaskList_stories_Template.bind({});Loading.args={tasks:[],loading:!0};var Empty=PureTaskList_stories_Template.bind({});Empty.args=Object.assign({},Loading.args,{loading:!1}),Default.parameters=Object.assign({storySource:{source:"args => ({\n  components: { PureTaskList },\n  setup() {\n    return { args, ...TaskStories.actionsData };\n  },\n  template: '<PureTaskList v-bind=\"args\" />',\n})"}},Default.parameters),WithPinnedTasks.parameters=Object.assign({storySource:{source:"args => ({\n  components: { PureTaskList },\n  setup() {\n    return { args, ...TaskStories.actionsData };\n  },\n  template: '<PureTaskList v-bind=\"args\" />',\n})"}},WithPinnedTasks.parameters),Loading.parameters=Object.assign({storySource:{source:"args => ({\n  components: { PureTaskList },\n  setup() {\n    return { args, ...TaskStories.actionsData };\n  },\n  template: '<PureTaskList v-bind=\"args\" />',\n})"}},Loading.parameters),Empty.parameters=Object.assign({storySource:{source:"args => ({\n  components: { PureTaskList },\n  setup() {\n    return { args, ...TaskStories.actionsData };\n  },\n  template: '<PureTaskList v-bind=\"args\" />',\n})"}},Empty.parameters)},834:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(27),__webpack_require__(6),__webpack_require__(47),__webpack_require__(9),__webpack_require__(427),__webpack_require__(48),__webpack_require__(428),__webpack_require__(811);var client_api=__webpack_require__(841),esm=__webpack_require__(5),parameters=(__webpack_require__(812),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},95:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"actionsData",(function(){return actionsData})),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Archived",(function(){return Archived}));__webpack_require__(16);var _Task_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(165),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(110);__webpack_exports__.default={component:_Task_vue__WEBPACK_IMPORTED_MODULE_1__.a,excludeStories:/.*Data$/,title:"Task",argTypes:{onPinTask:{},onArchiveTask:{}}};var actionsData={onPinTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("pin-task"),onArchiveTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("archive-task")},Template=function Template(args){return{components:{Task:_Task_vue__WEBPACK_IMPORTED_MODULE_1__.a},setup:function setup(){return Object.assign({args:args},actionsData)},template:'<Task v-bind="args" />'}},Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2018,0,1,9,0)}};var Pinned=Template.bind({});Pinned.args={task:Object.assign({},Default.args.task,{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:Object.assign({},Default.args.task,{state:"TASK_ARCHIVED"})},Default.parameters=Object.assign({storySource:{source:"args => ({\n  components: { Task },\n  setup() {\n    return { args, ...actionsData };\n  },\n  template: '<Task v-bind=\"args\" />',\n})"}},Default.parameters),Pinned.parameters=Object.assign({storySource:{source:"args => ({\n  components: { Task },\n  setup() {\n    return { args, ...actionsData };\n  },\n  template: '<Task v-bind=\"args\" />',\n})"}},Pinned.parameters),Archived.parameters=Object.assign({storySource:{source:"args => ({\n  components: { Task },\n  setup() {\n    return { args, ...actionsData };\n  },\n  template: '<Task v-bind=\"args\" />',\n})"}},Archived.parameters)}},[[470,2,3]]]);