/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(89)
	__webpack_require__(93)
	__webpack_require__(101)
	var __weex_template__ = __webpack_require__(105)
	var __weex_style__ = __webpack_require__(106)
	var __weex_script__ = __webpack_require__(107)

	__weex_define__('@weex-component/f5e1c456d74a6374b2c0129d79c108e1', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/f5e1c456d74a6374b2c0129d79c108e1',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)
	var __weex_style__ = __webpack_require__(3)
	var __weex_script__ = __webpack_require__(4)

	__weex_define__('@weex-component/task', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "task-add"
	      ],
	      "style": {
	        "flexDirection": "row"
	      },
	      "children": [
	        {
	          "type": "input",
	          "classList": [
	            "task-add-name"
	          ],
	          "style": {
	            "flex": 1
	          },
	          "id": "task-add-name",
	          "attr": {
	            "type": "text",
	            "value": function () {return this.task_add_input},
	            "placeholder": "Add a new task"
	          },
	          "events": {
	            "input": "change"
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "task-add-submit"
	          ],
	          "attr": {
	            "src": "http://p1.bqimg.com/567571/35ea328fd8adde9b.png"
	          },
	          "shown": function () {return this.can_submit},
	          "events": {
	            "click": "submit"
	          }
	        }
	      ],
	      "attr": {
	        "value": "//添加输入框中有内容时，才显示提交按钮"
	      }
	    },
	    {
	      "type": "list",
	      "classList": [
	        "task-list"
	      ],
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": function () {return this.task},
	          "attr": {
	            "value": "//单击标记任务完成，长按删除任务"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "task-item"
	              ],
	              "events": {
	                "click": "mark",
	                "longpress": "delete"
	              },
	              "attr": {
	                "index": function () {return this.$index},
	                "value": "//已完成的用灰色和删除线"
	              },
	              "style": {
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "task-item-finished"
	                  ],
	                  "attr": {
	                    "src": "http://p1.bpimg.com/567571/2daccb57f5eaf3af.png"
	                  },
	                  "shown": function () {return !this.is_finished}
	                },
	                {
	                  "type": "image",
	                  "classList": [
	                    "task-item-finished"
	                  ],
	                  "attr": {
	                    "src": "http://i1.piimg.com/567571/00bedf12dedceca3.png"
	                  },
	                  "shown": function () {return this.is_finished}
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "task-item-name"
	                  ],
	                  "shown": function () {return !this.is_finished},
	                  "attr": {
	                    "value": function () {return this.name}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "task-item-name"
	                  ],
	                  "style": {
	                    "textDecoration": "line-through",
	                    "color": "#e0e0e0"
	                  },
	                  "shown": function () {return this.is_finished},
	                  "attr": {
	                    "value": function () {return this.name}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 100,
	    "left": 0,
	    "right": 0,
	    "bottom": 100
	  },
	  "task-add": {
	    "backgroundColor": "#ffffff",
	    "marginTop": 16,
	    "marginBottom": 18,
	    "borderTopStyle": "solid",
	    "borderBottomStyle": "solid",
	    "borderTopWidth": 2,
	    "borderBottomWidth": 2,
	    "borderColor": "#dddddd",
	    "paddingLeft": 60,
	    "paddingRight": 60,
	    "height": 120
	  },
	  "task-add-name": {
	    "fontSize": 35
	  },
	  "task-add-submit": {
	    "marginTop": 35,
	    "width": 50,
	    "height": 50
	  },
	  "task-list": {
	    "marginBottom": 0
	  },
	  "task-item": {
	    "flexDirection": "row",
	    "backgroundColor": "#ffffff",
	    "marginTop": -2,
	    "paddingTop": 32,
	    "paddingLeft": 60,
	    "borderTopStyle": "solid",
	    "borderBottomStyle": "solid",
	    "borderTopWidth": 2,
	    "borderBottomWidth": 2,
	    "borderColor": "#dddddd",
	    "height": 120
	  },
	  "task-item-finished": {
	    "width": 56,
	    "height": 56
	  },
	  "task-item-name": {
	    "fontSize": 38,
	    "marginLeft": 20,
	    "color": "#777777"
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(5);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(8);
	module.exports = {
		data: function () {return {
			timer_is_run: false,
			can_submit: false,
			task_add_input: "",
			task: [],
			task_record: []
		}},
		created: function created() {
			var self = this;
			self.timer_is_run = false;

			this.$on('timer_stat', function (e) {
				if (e.detail.stat == 'TRUE') self.timer_is_run = true;else self.timer_is_run = false;
			});
		},
		ready: function ready() {
			var storage = __weex_require__('@weex-module/storage');
			var self = this;

			storage.getItem('task', function (e) {
				self.task = JSON.parse(e.data);
			});

			storage.getItem('timer_stat', function (e) {
				if (e.data == 'TRUE') self.timer_is_run = true;else self.timer_is_run = false;
			});
		},
		methods: {
			clone: function clone(obj) {
				return { name: obj.name, is_selected: obj.is_selected, is_run: obj.is_run, is_finished: obj.is_finished, pomo_cnt: obj.pomo_cnt };
			},

			sortby: function sortby(a, b) {
				if (!a.is_finished && b.is_finished) return -1;else if (a.is_finished && !b.is_finished) return 1;else return 0;
			},

			record: function record(t, st) {
				var storage = __weex_require__('@weex-module/storage');
				var self = this;

				storage.getItem('task_record', function (e) {
					self.task_record = JSON.parse(e.data);

					var d = new Date();
					var rec = { title: t.name, stat: st, pomo_cnt: t.pomo_cnt,
						time: d.getHours() + ':' + d.getMinutes(),
						date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
					};

					self.task_record.push(rec);

					storage.setItem('task_record', (0, _stringify2.default)(self.task_record));
				});
			},

			mark: function mark(e) {
				var storage = __weex_require__('@weex-module/storage');
				var self = this;

				if (this.timer_is_run) {
					this.$call('modal', 'toast', { 'message': 'Task editing is disabled because you are currently in a pomo', 'duration': 2 });
					return;
				}

				var index = e.target.attr.index;
				this.task[index].is_finished = !this.task[index].is_finished;
				this.task[index].is_selected = false;

				var tmp = this.task.slice();
				tmp.sort(this.sortby);
				this.task.splice(0, this.task.length);
				for (var i = 0; i < tmp.length; i++) {
					var t = this.clone(tmp[i]);
					this.task.push(t);
				}
				storage.setItem('task', (0, _stringify2.default)(self.task));

				var t = this.task[index];

				if (t.is_finished) this.record(t, 'finished');else this.record(t, 'recall');
			},

			change: function change(e) {
				if (e.value.length != 0) {
					this.can_submit = true;
				} else {
					this.can_submit = false;
				}
				this.task_add_input = e.value;
			},

			submit: function submit(e) {
				if (this.task_add_input.length > 0) {
					var storage = __weex_require__('@weex-module/storage');
					var self = this;

					var t = { name: this.task_add_input, is_selected: false, is_run: false, is_finished: false, pomo_cnt: 0 };
					this.task.push(t);
					this.task_add_input = "";

					var tmp = this.task.slice();
					tmp.sort(this.sortby);
					this.task.splice(0, this.task.length);
					for (var i = 0; i < tmp.length; i++) {
						var t = this.clone(tmp[i]);
						this.task.push(t);
					}

					this.$call('modal', 'toast', { 'message': 'Add a new task successfully', 'duration': 2 });

					storage.setItem('task', (0, _stringify2.default)(self.task));

					this.record(t, 'add');
				}
			},

			delete: function _delete(e) {
				var storage = __weex_require__('@weex-module/storage');
				var modal = __weex_require__('@weex-module/modal');
				var self = this;

				if (this.timer_is_run) {
					this.$call('modal', 'toast', { 'message': 'Task editing is disabled because you are currently in a pomo', 'duration': 2 });
					return;
				}

				var msg = "Do you really want to delete this task?";
				var ok_title = "DELETE";
				var cancel_title = "CANCEL";
				modal.confirm({
					'message': msg,
					'okTitle': ok_title,
					'cancelTitle': cancel_title
				}, function (result) {
					if (result == ok_title) {
						var index = e.target.attr.index;
						var t = self.task[index];
						self.task.splice(index, 1);

						storage.setItem('task', (0, _stringify2.default)(self.task));
						self.record(t, 'del');
					}
				});
			}
		}
	};}
	/* generated by weex-loader */


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(7)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(13);
	__webpack_require__(17);
	__webpack_require__(21);
	__webpack_require__(25);
	__webpack_require__(29);
	__webpack_require__(69);
	__webpack_require__(73);
	__webpack_require__(77);
	__webpack_require__(81);
	__webpack_require__(82);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(10)
	var __weex_style__ = __webpack_require__(11)
	var __weex_script__ = __webpack_require__(12)

	__weex_define__('@weex-component/wxc-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    size: 'large',
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(14)
	var __weex_style__ = __webpack_require__(15)
	var __weex_script__ = __webpack_require__(16)

	__weex_define__('@weex-component/wxc-hn', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    level: 1,
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(18)
	var __weex_style__ = __webpack_require__(19)
	var __weex_script__ = __webpack_require__(20)

	__weex_define__('@weex-component/wxc-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    bgColor: '#ffffff'
	  }},
	  methods: {
	    touchstart: function touchstart() {},
	    touchend: function touchend() {}
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(22)
	var __weex_style__ = __webpack_require__(23)
	var __weex_script__ = __webpack_require__(24)

	__weex_define__('@weex-component/wxc-panel', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    title: '',
	    paddingBody: 20,
	    paddingHead: 20,
	    dataClass: '',
	    border: 0
	  }},
	  ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(26)
	var __weex_style__ = __webpack_require__(27)
	var __weex_script__ = __webpack_require__(28)

	__weex_define__('@weex-component/wxc-tip', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'success',
	    value: ''
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(30)
	var __weex_style__ = __webpack_require__(31)
	var __weex_script__ = __webpack_require__(32)

	__weex_define__('@weex-component/wxc-countdown', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden"
	  }
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _assign = __webpack_require__(33);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.remain <= 0) {
	            return;
	        }

	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function nextTick() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	                if (this.calc()) {
	                    this.$emit('tick', (0, _assign2.default)({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', (0, _assign2.default)({}, this.time));
	                }
	                this._app.updateActions();
	            }
	        },
	        format: function format(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function calc() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);

	            return remain > 0;
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(35);
	module.exports = __webpack_require__(7).Object.assign;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(36);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(50)});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(37)
	  , core      = __webpack_require__(7)
	  , ctx       = __webpack_require__(38)
	  , hide      = __webpack_require__(40)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 37 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(39);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(41)
	  , createDesc = __webpack_require__(49);
	module.exports = __webpack_require__(45) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(42)
	  , IE8_DOM_DEFINE = __webpack_require__(44)
	  , toPrimitive    = __webpack_require__(48)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(45) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(43);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(45) && !__webpack_require__(46)(function(){
	  return Object.defineProperty(__webpack_require__(47)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(46)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(43)
	  , document = __webpack_require__(37).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(43);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(51)
	  , gOPS     = __webpack_require__(66)
	  , pIE      = __webpack_require__(67)
	  , toObject = __webpack_require__(68)
	  , IObject  = __webpack_require__(55)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(46)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(52)
	  , enumBugKeys = __webpack_require__(65);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(53)
	  , toIObject    = __webpack_require__(54)
	  , arrayIndexOf = __webpack_require__(58)(false)
	  , IE_PROTO     = __webpack_require__(62)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(55)
	  , defined = __webpack_require__(57);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(56);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(54)
	  , toLength  = __webpack_require__(59)
	  , toIndex   = __webpack_require__(61);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(60)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(60)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(63)('keys')
	  , uid    = __webpack_require__(64);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(37)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 66 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 67 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(57);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(70)
	var __weex_style__ = __webpack_require__(71)
	var __weex_script__ = __webpack_require__(72)

	__weex_define__('@weex-component/wxc-marquee', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	}

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.interval > 0 && this.step > 0 && this.duration > 0) {
	            this.nextTick();
	        }
	    },
	    methods: {
	        nextTick: function nextTick() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function () {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function animation(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	                styles: {
	                    transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	                },
	                timingFunction: 'ease',
	                duration: self.duration
	            }, function () {
	                self.index = (self.index + 1) % self.count;
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(74)
	var __weex_style__ = __webpack_require__(75)
	var __weex_script__ = __webpack_require__(76)

	__weex_define__('@weex-component/wxc-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',

	    backgroundColor: 'black',

	    height: 88,

	    title: "",

	    titleColor: 'black',

	    rightItemSrc: '',

	    rightItemTitle: '',

	    rightItemColor: 'black',

	    leftItemSrc: '',

	    leftItemTitle: '',

	    leftItemColor: 'black'
	  }},
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', {});
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73)
	var __weex_template__ = __webpack_require__(78)
	var __weex_style__ = __webpack_require__(79)
	var __weex_script__ = __webpack_require__(80)

	__weex_define__('@weex-component/wxc-navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	    backgroundColor: 'black',
	    height: 88,
	    title: "",
	    titleColor: 'black',
	    rightItemSrc: '',
	    rightItemTitle: '',
	    rightItemColor: 'black',
	    leftItemSrc: '',
	    leftItemTitle: '',
	    leftItemColor: 'black'
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(82)
	var __weex_template__ = __webpack_require__(86)
	var __weex_style__ = __webpack_require__(87)
	var __weex_script__ = __webpack_require__(88)

	__weex_define__('@weex-component/wxc-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(83)
	var __weex_style__ = __webpack_require__(84)
	var __weex_script__ = __webpack_require__(85)

	__weex_define__('@weex-component/wxc-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    index: 0,
	    title: '',
	    titleColor: '#000000',
	    icon: '',
	    backgroundColor: '#ffffff'
	  }},
	  methods: {
	    onclickitem: function onclickitem(e) {
	      var vm = this;
	      var params = {
	        index: vm.index
	      };
	      vm.$dispatch('tabItem.onClick', params);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    tabItems: [],
	    selectedIndex: 0,
	    selectedColor: '#ff0000',
	    unselectedColor: '#000000'
	  }},
	  created: function created() {
	    this.selected(this.selectedIndex);

	    this.$on('tabItem.onClick', function (e) {
	      var detail = e.detail;
	      this.selectedIndex = detail.index;
	      this.selected(detail.index);

	      var params = {
	        index: detail.index
	      };
	      this.$dispatch('tabBar.onClick', params);
	    });
	  },
	  methods: {
	    selected: function selected(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(90)
	var __weex_style__ = __webpack_require__(91)
	var __weex_script__ = __webpack_require__(92)

	__weex_define__('@weex-component/pomodoro', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "classList": [
	    "wrapper"
	  ],
	  "attr": {
	    "value": "//计时器运行且在休息时，绿色"
	  },
	  "children": [
	    {
	      "type": "wxc-tip",
	      "attr": {
	        "type": "warning",
	        "value": "Select some tasks to be performed and click the Start button"
	      },
	      "shown": function () {return !this.timer_is_run}
	    },
	    {
	      "type": "wxc-tip",
	      "attr": {
	        "type": "danger",
	        "value": "The following tasks are being performed"
	      },
	      "shown": function () {return this.timer_is_run&&!this.rest_is_run}
	    },
	    {
	      "type": "wxc-tip",
	      "attr": {
	        "type": "success",
	        "value": "A pomodoro is finished and you can have a rest"
	      },
	      "shown": function () {return this.timer_is_run&&this.rest_is_run}
	    },
	    {
	      "type": "list",
	      "classList": [
	        "task-list"
	      ],
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": function () {return this.task},
	          "shown": function () {return !this.timer_is_run},
	          "attr": {
	            "value": "//计时器未运行时，仅显示未完成的任务，供用户选择这次番茄钟所要进行的任务"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "task-item"
	              ],
	              "events": {
	                "click": "select"
	              },
	              "attr": {
	                "index": function () {return this.$index}
	              },
	              "shown": function () {return !this.is_finished},
	              "style": {
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "task-item-selected"
	                  ],
	                  "attr": {
	                    "src": "http://p1.bpimg.com/567571/2daccb57f5eaf3af.png"
	                  },
	                  "shown": function () {return !this.is_selected}
	                },
	                {
	                  "type": "image",
	                  "classList": [
	                    "task-item-selected"
	                  ],
	                  "attr": {
	                    "src": "http://p1.bpimg.com/567571/9e56ca09575f1768.png"
	                  },
	                  "shown": function () {return this.is_selected}
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "task-item-name"
	                  ],
	                  "attr": {
	                    "value": function () {return this.name}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": function () {return this.task},
	          "shown": function () {return this.timer_is_run},
	          "attr": {
	            "value": "//计时器运行时，仅显示用户这次番茄钟选择的任务"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "task-item"
	              ],
	              "events": {
	                "click": "select"
	              },
	              "attr": {
	                "index": function () {return this.$index}
	              },
	              "shown": function () {return !this.is_finished&&this.is_selected},
	              "style": {
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "task-item-selected"
	                  ],
	                  "attr": {
	                    "src": "http://p1.bpimg.com/567571/9e56ca09575f1768.png"
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "task-item-name"
	                  ],
	                  "attr": {
	                    "value": function () {return this.name}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 100,
	    "left": 0,
	    "right": 0,
	    "bottom": 100
	  },
	  "task-list": {
	    "marginBottom": 0
	  },
	  "task-item": {
	    "flexDirection": "row",
	    "backgroundColor": "#ffffff",
	    "marginTop": -2,
	    "paddingTop": 32,
	    "paddingLeft": 60,
	    "borderTopStyle": "solid",
	    "borderBottomStyle": "solid",
	    "borderTopWidth": 2,
	    "borderBottomWidth": 2,
	    "borderColor": "#dddddd",
	    "height": 120
	  },
	  "task-item-selected": {
	    "width": 56,
	    "height": 56
	  },
	  "task-item-name": {
	    "fontSize": 38,
	    "marginLeft": 20,
	    "color": "#777777"
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(5);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(8);
	module.exports = {
		data: function () {return {
			timer_is_run: false,
			rest_is_run: false,
			task: []
		}},
		init: function init() {},
		created: function created() {
			var storage = __weex_require__('@weex-module/storage');
			var self = this;

			storage.getItem('first_flag', function (e) {
				if (e.data == 'NOTFIRST') {} else {
						self.task.push({ name: '选择任务以开始番茄钟', is_selected: false, is_run: false, is_finished: false, pomo_cnt: 0 });
						self.task.push({ name: 'Task中添加新的任务', is_selected: false, is_run: false, is_finished: false, pomo_cnt: 0 });
						self.task.push({ name: 'Task中单击任务将其标记为完成', is_selected: false, is_run: false, is_finished: false, pomo_cnt: 0 });
						self.task.push({ name: 'Task中长按任务以删除任务', is_selected: false, is_run: false, is_finished: false, pomo_cnt: 0 });
						self.task.push({ name: 'Record中查看番茄钟完成的记录', is_selected: false, is_run: false, is_finished: false, pomo_cnt: 0 });

						storage.setItem('task', self.task);
						storage.setItem('first_flag', 'NOTFIRST');
					}
			});

			this.$on('timer_stat', function (e) {
				if (e.detail.stat == 'TRUE') self.timer_is_run = true;else self.timer_is_run = false;
			});

			this.$on('rest_stat', function (e) {
				if (e.detail.stat == 'TRUE') self.rest_is_run = true;else self.rest_is_run = false;
			});
		},
		ready: function ready() {
			var storage = __weex_require__('@weex-module/storage');
			var self = this;

			storage.getItem('task', function (e) {
				self.task = JSON.parse(e.data);
			});

			storage.getItem('timer_stat', function (e) {
				if (e.data == 'TRUE') self.timer_is_run = true;else self.timer_is_run = false;
			});

			storage.getItem('rest_stat', function (e) {
				if (e.data == 'TRUE') self.rest_is_run = true;else self.rest_is_run = false;
			});
		},
		methods: {
			select: function select(e) {
				var storage = __weex_require__('@weex-module/storage');
				var self = this;

				if (this.timer_is_run) return;

				var index = e.target.attr.index;
				this.task[index].is_selected = !this.task[index].is_selected;
				storage.setItem('task', (0, _stringify2.default)(self.task));
			}
		}
	};}
	/* generated by weex-loader */


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(94)
	var __weex_template__ = __webpack_require__(98)
	var __weex_style__ = __webpack_require__(99)
	var __weex_script__ = __webpack_require__(100)

	__weex_define__('@weex-component/record', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(95)
	var __weex_style__ = __webpack_require__(96)
	var __weex_script__ = __webpack_require__(97)

	__weex_define__('@weex-component/dropdown', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "select-container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "content"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "mask"
	      ],
	      "id": "mask",
	      "events": {
	        "click": "switchView"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "options"
	      ],
	      "id": "options",
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.status},
	          "classList": [
	            "cell"
	          ],
	          "attr": {
	            "vid": function () {return this.id}
	          },
	          "events": {
	            "click": "onItemClick"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": function () {return ['name', this.id==this.statusId?'current':'']},
	              "attr": {
	                "value": function () {return this.name}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "icon-curr-flag"
	              ],
	              "attr": {
	                "src": function () {return this.flagSrc}
	              },
	              "shown": function () {return this.id==this.statusId}
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "select"
	      ],
	      "events": {
	        "click": "switchView"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "current-text"
	          ],
	          "attr": {
	            "value": function () {return this.statusName}
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "icon-arrow"
	          ],
	          "id": "arrow",
	          "attr": {
	            "src": function () {return this.arrowSrc}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = {
	  "select-container": {
	    "flexDirection": "column",
	    "position": "relative",
	    "zIndex": 1000
	  },
	  "content": {
	    "width": 750,
	    "marginTop": 70
	  },
	  "mask": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "bottom": 0,
	    "right": 0,
	    "flex": 1,
	    "width": 750,
	    "backgroundColor": "rgba(0,0,0,0.5)",
	    "visibility": "hidden"
	  },
	  "select": {
	    "width": 750,
	    "height": 70,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderBottomWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#dddddd",
	    "backgroundColor": "#ff6347",
	    "zIndex": 1001,
	    "position": "absolute",
	    "top": 0
	  },
	  "current-text": {
	    "color": "#ffffff",
	    "fontSize": 33,
	    "flex": 1
	  },
	  "icon-arrow": {
	    "width": 27,
	    "height": 23
	  },
	  "options": {
	    "position": "absolute",
	    "top": -140,
	    "width": 750,
	    "backgroundColor": "#ffffff",
	    "transformOrigin": "center center"
	  },
	  "cell": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "width": 750,
	    "height": 70,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderBottomWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#dddddd"
	  },
	  "name": {
	    "color": "#333333",
	    "fontSize": 33,
	    "flex": 1
	  },
	  "icon-curr-flag": {
	    "width": 32,
	    "height": 32
	  },
	  "current": {
	    "color": "#ff6347"
	  }
	}

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var animation = __weex_require__('@weex-module/animation');

	module.exports = {
	    data: function () {return {
	        statusId: '0',
	        status: [{ id: '0', name: 'Statistics' }, { id: '1', name: 'Pomodoro record' }, { id: '2', name: 'Task record' }],
	        flagSrc: 'http://i1.piimg.com/567571/8342e69e85baf0ce.png',
	        arrowSrc: 'http://i1.piimg.com/567571/cc14eaf2b78c1b69.png'
	    }},
	    computed: {
	        statusName: {
	            get: function get() {
	                var id = this.statusId;
	                return this.status.filter(function (s) {
	                    return s.id == id;
	                })[0].name;
	            }
	        }
	    },
	    methods: {
	        switchView: function switchView() {
	            this.toggleMaskVisible();

	            this.opacity(this._ids.mask.el.ref);
	            this.collapse(this._ids.options.el.ref);
	            this.rotate(this._ids.arrow.el.ref);
	        },

	        onItemClick: function onItemClick(e) {
	            var vid = e.target.attr.vid;
	            this.updateStatus(vid);
	            this.switchView();
	            this.$dispatch('statuschange', {
	                id: this.statusId,
	                name: this.statusName
	            });
	        },

	        updateStatus: function updateStatus(id) {
	            this.statusId = id;
	        },

	        toggleMaskVisible: function toggleMaskVisible() {
	            this.current_showMask = !this.current_showMask;
	            var visibility = this.current_showMask ? 'visible' : 'hidden';
	            this._ids.mask.el.setClassStyle({ visibility: visibility });
	        },

	        collapse: function collapse(ref, callback) {
	            var platform = this.$getConfig().env.platform;
	            var translate = 'translate(0, 100%)';
	            if (platform == 'iOS') {
	                translate = 'translate(0, 270)';
	            }
	            this.current_translate = this.current_translate ? '' : translate;
	            this.anim(ref, {
	                transform: this.current_translate
	            }, 'ease', 100, callback);
	        },

	        opacity: function opacity(ref, callback) {
	            var self = this;
	            self.current_opacity = self.current_opacity === 1 ? 0.1 : 1;
	            self.anim(ref, {
	                opacity: self.current_opacity
	            }, 'ease', 100, callback);
	        },

	        rotate: function rotate(ref, callback) {
	            var self = this;
	            if (!self.current_rotate) {
	                self.current_rotate = 0;
	            }
	            self.current_rotate = self.current_rotate + 180;
	            self.anim(ref, {
	                transform: 'rotate(' + self.current_rotate + 'deg)'
	            }, 'linear', 100, callback);
	        },

	        anim: function anim(ref, styles, timingFunction, duration, callback) {
	            animation.transition(ref, {
	                styles: styles,
	                timingFunction: timingFunction,
	                duration: duration
	            }, callback || function () {});
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "dropdown",
	      "classList": [
	        "dropdown"
	      ],
	      "attr": {
	        "statusId": function () {return this.status},
	        "value": "//任务记录"
	      },
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "height": function () {return this.screenHeight}
	          },
	          "shown": function () {return this.status==0},
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "marginTop": 30
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "width": 375
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "stat-all-title"
	                      ],
	                      "attr": {
	                        "value": "Finished"
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "flexDirection": "row",
	                        "paddingLeft": 35,
	                        "marginTop": 20
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": 30
	                          },
	                          "attr": {
	                            "value": function () {return this.tot_cnt}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "style": {
	                            "color": "#008000",
	                            "fontSize": 30,
	                            "paddingLeft": 10
	                          },
	                          "attr": {
	                            "value": function () {return '+' + (this.today_cnt)}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "width": 375
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "stat-all-title"
	                      ],
	                      "attr": {
	                        "value": "Daily Average"
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "flexDirection": "row",
	                        "paddingLeft": 35,
	                        "marginTop": 20
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "style": {
	                            "fontSize": 30
	                          },
	                          "attr": {
	                            "value": function () {return this.daily_avg}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "style": {
	                            "color": "#008000",
	                            "fontSize": 30,
	                            "paddingLeft": 10
	                          },
	                          "shown": function () {return this.daily_avg_inc>=0},
	                          "attr": {
	                            "value": function () {return '+' + (this.daily_avg_inc)}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "style": {
	                            "color": "#008000",
	                            "fontSize": 30,
	                            "paddingLeft": 10
	                          },
	                          "shown": function () {return this.daily_avg_inc<0},
	                          "attr": {
	                            "value": function () {return this.daily_avg_inc}
	                          }
	                        }
	                      ],
	                      "attr": {
	                        "value": "//这个值可能为负数，就不显示加号了"
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "marginTop": 40,
	                "backgroundColor": "#ffffff"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "width": 375,
	                    "paddingRight": 20
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "height": 125
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "workday-title-1"
	                          ],
	                          "attr": {
	                            "value": "BEST WORKDAY"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "height": 125
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "workday-title-2"
	                          ],
	                          "attr": {
	                            "value": function () {return this.best_week_day}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "width": 350,
	                        "height": 125
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "workday-title-3"
	                          ],
	                          "attr": {
	                            "value": function () {return this.best_week_day_cnt}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "width": 350,
	                        "height": 125
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "workday-title-4"
	                          ],
	                          "attr": {
	                            "value": function () {return 'AVG + ' + (this.best_week_day_inc)}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "alignItems": "center",
	                    "height": function () {return this.bar_max_height},
	                    "backgroundColor": "#F7F7F7",
	                    "marginRight": 22
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "width": 30,
	                        "height": function () {return this.s_height},
	                        "backgroundColor": "#ffffff"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "bar-text"
	                      ],
	                      "attr": {
	                        "value": "S"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "alignItems": "center",
	                    "height": function () {return this.bar_max_height},
	                    "backgroundColor": "#F7F7F7",
	                    "marginRight": 22
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "width": 30,
	                        "height": function () {return this.m_height},
	                        "backgroundColor": "#ffffff"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "bar-text"
	                      ],
	                      "attr": {
	                        "value": "M"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "alignItems": "center",
	                    "height": function () {return this.bar_max_height},
	                    "backgroundColor": "#F7F7F7",
	                    "marginRight": 22
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "width": 30,
	                        "height": function () {return this.t_height},
	                        "backgroundColor": "#ffffff"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "bar-text"
	                      ],
	                      "attr": {
	                        "value": "T"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "alignItems": "center",
	                    "height": function () {return this.bar_max_height},
	                    "backgroundColor": "#F7F7F7",
	                    "marginRight": 22
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "width": 30,
	                        "height": function () {return this.w_height},
	                        "backgroundColor": "#ffffff"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "bar-text"
	                      ],
	                      "attr": {
	                        "value": "W"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "alignItems": "center",
	                    "height": function () {return this.bar_max_height},
	                    "backgroundColor": "#F7F7F7",
	                    "marginRight": 22
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "width": 30,
	                        "height": function () {return this.thu_height},
	                        "backgroundColor": "#ffffff"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "bar-text"
	                      ],
	                      "attr": {
	                        "value": "T"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "alignItems": "center",
	                    "height": function () {return this.bar_max_height},
	                    "backgroundColor": "#F7F7F7",
	                    "marginRight": 22
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "width": 30,
	                        "height": function () {return this.f_height},
	                        "backgroundColor": "#ffffff"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "bar-text"
	                      ],
	                      "attr": {
	                        "value": "F"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "alignItems": "center",
	                    "height": function () {return this.bar_max_height},
	                    "backgroundColor": "#F7F7F7",
	                    "marginRight": 22
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "width": 30,
	                        "height": function () {return this.sat_height},
	                        "backgroundColor": "#ffffff"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "bar-text"
	                      ],
	                      "attr": {
	                        "value": "S"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "height": function () {return this.screenHeight}
	          },
	          "shown": function () {return this.status==1},
	          "children": [
	            {
	              "type": "list",
	              "children": [
	                {
	                  "type": "cell",
	                  "append": "tree",
	                  "repeat": function () {return this.pomo_record},
	                  "classList": [
	                    "cell"
	                  ],
	                  "events": {
	                    "longpress": "del_pomorec"
	                  },
	                  "attr": {
	                    "index": function () {return this.$index}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "title"
	                      ],
	                      "attr": {
	                        "value": function () {return this.title}
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "info"
	                      ],
	                      "attr": {
	                        "value": "//不同类型的记录用不同颜色"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt",
	                            "pomodoro"
	                          ],
	                          "shown": function () {return this.stat=='pomodoro'},
	                          "attr": {
	                            "value": "Pomodoro,"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt",
	                            "rest"
	                          ],
	                          "shown": function () {return this.stat=='rest'},
	                          "attr": {
	                            "value": "Rest,"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt"
	                          ],
	                          "attr": {
	                            "value": function () {return 'time: ' + (this.start) + '-' + (this.end) + ','}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt"
	                          ],
	                          "attr": {
	                            "value": function () {return 'date: ' + (this.date)}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "height": function () {return this.screenHeight}
	          },
	          "shown": function () {return this.status==2},
	          "children": [
	            {
	              "type": "list",
	              "children": [
	                {
	                  "type": "cell",
	                  "append": "tree",
	                  "repeat": function () {return this.task_record},
	                  "classList": [
	                    "cell"
	                  ],
	                  "events": {
	                    "longpress": "del_taskrec"
	                  },
	                  "attr": {
	                    "index": function () {return this.$index}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "title"
	                      ],
	                      "attr": {
	                        "value": function () {return this.title}
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "info"
	                      ],
	                      "attr": {
	                        "value": "//不同类型的记录用不同颜色"
	                      },
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt",
	                            "pomodoro"
	                          ],
	                          "shown": function () {return this.stat=='add'||this.stat=='finished'},
	                          "attr": {
	                            "value": function () {return (this.stat) + ','}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt",
	                            "rest"
	                          ],
	                          "shown": function () {return this.stat=='del'||this.stat=='recall'},
	                          "attr": {
	                            "value": function () {return (this.stat) + ','}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt",
	                            "pomodoro"
	                          ],
	                          "shown": function () {return this.stat=='add'||this.stat=='finished'},
	                          "attr": {
	                            "value": function () {return 'pomo: ' + (this.pomo_cnt) + ','}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt",
	                            "rest"
	                          ],
	                          "shown": function () {return this.stat=='del'||this.stat=='recall'},
	                          "attr": {
	                            "value": function () {return 'pomo: ' + (this.pomo_cnt) + ','}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt"
	                          ],
	                          "attr": {
	                            "value": function () {return 'time: ' + (this.time) + ','}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "txt"
	                          ],
	                          "attr": {
	                            "value": function () {return 'date: ' + (this.date)}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 100,
	    "left": 0,
	    "right": 0,
	    "bottom": 100
	  },
	  "dropdown": {
	    "justifyContent": "center",
	    "alignContent": "stretch",
	    "position": "relative",
	    "zIndex": 100
	  },
	  "cell": {
	    "width": 750,
	    "paddingTop": 15,
	    "paddingBottom": 5,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "borderBottomWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#999999"
	  },
	  "title": {
	    "fontSize": 32,
	    "paddingTop": 5,
	    "paddingBottom": 5,
	    "color": "#333333"
	  },
	  "info": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "stretch"
	  },
	  "txt": {
	    "fontSize": 28,
	    "paddingTop": 5,
	    "paddingBottom": 5,
	    "color": "#999999",
	    "marginRight": 10
	  },
	  "pomodoro": {
	    "color": "#e74c3c"
	  },
	  "rest": {
	    "color": "#458b00"
	  },
	  "stat-all-title": {
	    "fontSize": 40,
	    "paddingLeft": 35
	  },
	  "workday-title-1": {
	    "fontSize": 45,
	    "//textAlign": "center",
	    "fontWeight": "bold",
	    "paddingTop": 55,
	    "marginLeft": 20,
	    "color": "#C0C0C0"
	  },
	  "workday-title-2": {
	    "fontSize": 60,
	    "//textAlign": "center",
	    "paddingTop": 30,
	    "fontWeight": "bold",
	    "color": "#000000",
	    "marginLeft": 20
	  },
	  "workday-title-3": {
	    "fontSize": 45,
	    "//textAlign": "center",
	    "fontWeight": "bold",
	    "paddingTop": 25,
	    "color": "#000000",
	    "marginLeft": 20
	  },
	  "workday-title-4": {
	    "fontSize": 30,
	    "//textAlign": "center",
	    "fontWeight": "bold",
	    "color": "#C0C0C0",
	    "paddingTop": 25,
	    "marginLeft": 20
	  },
	  "bar-text": {
	    "color": "#9F79EE",
	    "fontSize": 15
	  }
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(5);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(94);

	module.exports = {
					data: function () {return {
									screenHeight: 0,
									status: 0,
									pomo_record: [],
									task_record: [],

									bar_max_height: 50 * 10,
									s_height: 0,
									m_height: 0,
									t_height: 0,
									w_height: 0,
									thu_height: 0,
									f_height: 0,
									sat_height: 0,

									daily_avg: 0.00,
									daily_avg_inc: 0.00,

									best_week_day: 'No Data',
									best_week_day_cnt: 0,
									best_week_day_inc: 0,

									week_cnt: [0, 0, 0, 0, 0, 0, 0],
									tot_cnt: 0,
									today_cnt: 0,
									day_num: 0 }},
					ready: function ready() {
									var storage = __weex_require__('@weex-module/storage');
									var self = this;

									this.screenHeight = 792;

									this.$on('statuschange', function (e) {
													this.status = e.detail.id;
									}.bind(this));

									var storage = __weex_require__('@weex-module/storage');
									var self = this;

									storage.getItem('pomo_record', function (e) {
													self.pomo_record = JSON.parse(e.data);
									});

									storage.getItem('task_record', function (e) {
													self.task_record = JSON.parse(e.data);
									});

									storage.getItem('week_cnt', function (e) {
													self.week_cnt = JSON.parse(e.data);


													self.s_height = self.week_cnt[0] + 1;
													self.m_height = self.week_cnt[1] + 1;
													self.t_height = self.week_cnt[2] + 1;
													self.w_height = self.week_cnt[3] + 1;
													self.thu_height = self.week_cnt[4] + 1;
													self.f_height = self.week_cnt[5] + 1;
													self.sat_height = self.week_cnt[6] + 1;

													self.s_height = self.bar_max_height - self.s_height * 50;
													self.m_height = self.bar_max_height - self.m_height * 50;
													self.t_height = self.bar_max_height - self.t_height * 50;
													self.w_height = self.bar_max_height - self.w_height * 50;
													self.thu_height = self.bar_max_height - self.thu_height * 50;
													self.f_height = self.bar_max_height - self.f_height * 50;
													self.sat_height = self.bar_max_height - self.sat_height * 50;

													var week_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
													var max_cnt = 0;
													var week_tot = 0;
													for (var i = 0; i < self.week_cnt.length; i++) {
																	week_tot = week_tot + self.week_cnt[i];
																	if (self.week_cnt[i] > max_cnt) {
																					max_cnt = self.week_cnt[i];
																					self.best_week_day = week_name[i];
																					self.best_week_day_cnt = self.week_cnt[i];
																	}
																	if (max_cnt > 0) self.best_week_day_inc = (max_cnt - week_tot * 1.0 / 7).toFixed(2);
													}
									});
									storage.getItem('tot_cnt', function (e) {
													self.tot_cnt = parseInt(e.data);

													storage.getItem('day_num', function (e) {
																	self.day_num = parseInt(e.data);

																	self.daily_avg = (self.tot_cnt * 1.0 / self.day_num).toFixed(2);

																	storage.getItem('today_cnt', function (e) {
																					self.today_cnt = parseInt(e.data);

																					if (self.day_num == 1) self.daily_avg_inc = (self.tot_cnt * 1.0 / self.day_num).toFixed(2);else self.daily_avg_inc = (self.tot_cnt * 1.0 / self.day_num - (self.tot_cnt - self.today_cnt) * 1.0 / (self.day_num - 1)).toFixed(2);
																	});
													});
									});
					},
					methods: {
									del_pomorec: function del_pomorec(e) {
													var storage = __weex_require__('@weex-module/storage');
													var self = this;

													var index = e.target.attr.index;
													var t = self.pomo_record[index];
													self.pomo_record.splice(index, 1);

													storage.setItem('pomo_record', (0, _stringify2.default)(self.pomo_record));
									},

									del_taskrec: function del_taskrec(e) {
													var storage = __weex_require__('@weex-module/storage');
													var self = this;

													var index = e.target.attr.index;
													var t = self.task_record[index];
													self.task_record.splice(index, 1);

													storage.setItem('task_record', (0, _stringify2.default)(self.task_record));
									}
					}
	};}
	/* generated by weex-loader */


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(102)
	var __weex_style__ = __webpack_require__(103)
	var __weex_script__ = __webpack_require__(104)

	__weex_define__('@weex-component/tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "tabbar"
	  ],
	  "id": "tabbar",
	  "style": {
	    "transformOrigin": function () {return this.transformOrigin},
	    "height": function () {return this.tabbarHeight},
	    "backgroundColor": function () {return 'rgba(255, 255, 255,' + (this.bgopacity) + ')'}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "tabs"
	      ],
	      "attr": {
	        "ref": function () {return this.$index}
	      },
	      "events": {
	        "click": "switchPage"
	      },
	      "repeat": function () {return this.tabs},
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "img"
	          ],
	          "shown": function () {return this.selected!==this.$index},
	          "style": {
	            "left": function () {return this.imgleft}
	          },
	          "attr": {
	            "src": function () {return this.image}
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "img"
	          ],
	          "shown": function () {return this.selected===this.$index},
	          "style": {
	            "left": function () {return this.imgleft}
	          },
	          "attr": {
	            "src": function () {return this.selectedImage}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "style": {
	            "color": function () {return this.selected===this.$index?this.activeTitleColor:this.defaultTitleColor}
	          },
	          "attr": {
	            "value": function () {return this.title}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "number"
	          ],
	          "style": {
	            "backgroundColor": function () {return this.labelColor}
	          },
	          "id": function () {return this.labelName},
	          "shown": function () {return this.haslabel},
	          "attr": {
	            "value": function () {return this.label}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = {
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "textAlign": "center",
	    "borderTop": "1px solid rgb(197, 197, 197)",
	    "zIndex": 10,
	    "width": 750
	  },
	  "tabs": {
	    "position": "relative",
	    "flex": 1,
	    "textAlign": "center",
	    "flexDirection": "column",
	    "bottom": 0
	  },
	  "img": {
	    "width": 50,
	    "height": 50,
	    "left": 70,
	    "marginTop": 10,
	    "position": "relative",
	    "textAlign": "center"
	  },
	  "text": {
	    "fontSize": 26,
	    "textAlign": "center",
	    "marginTop": 5
	  },
	  "number": {
	    "position": "absolute",
	    "bottom": 55,
	    "right": 30,
	    "color": "#ffffff",
	    "borderRadius": 20,
	    "width": 40,
	    "height": 40,
	    "lineHeight": 40,
	    "fontSize": 28,
	    "textAlign": "center"
	  }
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var animation = __weex_require__('@weex-module/animation');
	__webpack_require__(8);

	module.exports = {
		data: function () {return {
			tabs: [],
			selected: 0,
			tabbarHeight: "100",
			imgleft: 70,
			bgopacity: "1",
			labelColor: "#db3652",
			transformOrigin: "center center",
			current_translate: "show",
			controlAnim: 0 }},
		created: function created() {
			var _this = this;

			if (this.tabs.length > 4) {
				this.imgleft = 50 + (5 - this.tabs.length) * 30;
			} else {
				this.imgleft = 40 + (5 - this.tabs.length) * 30;
			}

			this.$on("tabbarAccept", function (e) {
				_this.executeMessage({
					target: e.detail.target,
					action: e.detail.action,
					value: e.detail.value
				});
			});

			this.$on("tabbarState", function (e) {
				if (e.detail.state === "show") {
					_this.tabbarShow();
				} else {
					_this.tabbarHide();
				}
			});
		},
		ready: function ready() {},

		methods: {
			switchPage: function switchPage(event) {
				var index = event.target.attr.ref;
				this.$dispatch("switchPage", {
					page: index
				});
				this.onselected = index;
			},
			anim: function anim(styles, timingFunction, duration, callback) {
				animation.transition(this._ids.tabbar.el.ref, {
					styles: styles,
					timingFunction: timingFunction,
					duration: duration
				}, callback);
			},
			tabbarShow: function tabbarShow() {
				var _this2 = this;

				if (this.current_translate === "show" || this.controlAnim === 1) {
					return;
				}

				this.controlAnim = 1;
				this.current_translate = 'translate(0, 0)';

				this.anim({
					transform: this.current_translate
				}, "ease-in", 300, function () {
					_this2.current_translate = "show";
					_this2.controlAnim = 0;
				});
			},
			tabbarHide: function tabbarHide() {
				var _this3 = this;

				if (this.current_translate === "hide" || this.controlAnim === 1) {
					return;
				}

				this.controlAnim = 1;
				this.current_translate = 'translate(0, 100%)';

				this.anim({
					transform: this.current_translate
				}, "ease-out", 300, function () {
					_this3.current_translate = "hide";
					_this3.controlAnim = 0;
				});
			},
			executeMessage: function executeMessage(message) {
				switch (message.action) {
					case "add":
						this.$vm(message.target).label++;
						break;
					case "minus":
						this.$vm(message.target).label--;
						break;
					case "set":
						this.$vm(message.target).label = message.value;
				}
			}
		}
	};}
	/* generated by weex-loader */


/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "index"
	  ],
	  "attr": {
	    "value": "//标签栏"
	  },
	  "children": [
	    {
	      "type": "wxc-navpage",
	      "classList": [
	        "timer"
	      ],
	      "shown": function () {return !this.rest_is_run},
	      "attr": {
	        "dataRole": "none",
	        "height": "100",
	        "backgroundColor": "#e74c3c",
	        "title": function () {return this.timer_show},
	        "titleColor": "white",
	        "leftItemSrc": "http://p1.bqimg.com/567571/63769c8583205e32.png",
	        "rightItemSrc": function () {return this.timer_icon_src}
	      }
	    },
	    {
	      "type": "wxc-navpage",
	      "classList": [
	        "timer"
	      ],
	      "shown": function () {return this.rest_is_run},
	      "attr": {
	        "dataRole": "none",
	        "height": "100",
	        "backgroundColor": "#458b00",
	        "title": function () {return this.rest_show},
	        "titleColor": "white",
	        "leftItemSrc": "http://p1.bqimg.com/567571/63769c8583205e32.png",
	        "rightItemSrc": function () {return this.timer_icon_src}
	      }
	    },
	    {
	      "type": "task",
	      "classList": [
	        "page"
	      ],
	      "id": "task-id",
	      "shown": function () {return this.page===0},
	      "style": {
	        "zIndex": function () {return this.page===0?5:0}
	      }
	    },
	    {
	      "type": "pomodoro",
	      "classList": [
	        "page"
	      ],
	      "id": "pomodoro-id",
	      "shown": function () {return this.page===1},
	      "style": {
	        "zIndex": function () {return this.page===1?5:0}
	      }
	    },
	    {
	      "type": "record",
	      "classList": [
	        "page"
	      ],
	      "shown": function () {return this.page===2},
	      "style": {
	        "zIndex": function () {return this.page===2?5:0}
	      }
	    },
	    {
	      "type": "tabbar",
	      "id": "tabbar",
	      "attr": {
	        "bgopacity": "1",
	        "tabs": function () {return this.tabItems},
	        "selected": function () {return this.page}
	      },
	      "classList": [
	        "tabbar"
	      ]
	    }
	  ]
	}

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = {
	  "timer": {
	    "zIndex": 10,
	    "height": 100
	  },
	  "index": {
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "top": 0,
	    "bottom": 0
	  },
	  "tabbar": {
	    "zIndex": 10,
	    "width": 750,
	    "borderTopStyle": "solid",
	    "borderTopWidth": 2,
	    "borderColor": "#bbbbbb"
	  },
	  "page": {
	    "backgroundColor": "#eeeeee",
	    "zIndex": 0
	  }
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _stringify = __webpack_require__(5);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(89);
	__webpack_require__(1);
	__webpack_require__(93);

	var timer;

	module.exports = {
		data: function () {return {
			timer_minute: 25,
			timer_show: '',
			timer_is_run: false,
			timer_icon_src: 'http://p1.bqimg.com/567571/828eec3b5562dc2b.png',
			rest_minute: 5,
			rest_show: '',
			rest_is_run: false,
			start_time: '',
			end_time: '',

			task: [],
			pomo_record: [],
			task_record: [],

			today_date: 0,
			day_num: 0,
			tot_cnt: 0,
			today_cnt: 0,
			week_cnt: [0, 0, 0, 0, 0, 0, 0],

			page: 1,
			tabItems: [{
				title: "Task",
				defaultTitleColor: "#868686",
				activeTitleColor: "#e35a3f",
				image: 'http://i1.piimg.com/567571/624f02c6898e7b7d.png',
				selectedImage: 'http://i1.piimg.com/567571/cf6763c59723cece.png'
			}, {
				title: "Pomodoro",
				defaultTitleColor: "#868686",
				activeTitleColor: "#e35a3f",
				image: 'http://i1.piimg.com/567571/e7ff1e9f133a4fc5.png',
				selectedImage: 'http://i1.piimg.com/567571/4ebca3754f7ce737.png'
			}, {
				title: "Record",
				defaultTitleColor: "#868686",
				activeTitleColor: "#e35a3f",
				image: 'http://i1.piimg.com/567571/3f67c0fd7bef195c.png',
				selectedImage: 'http://i1.piimg.com/567571/93bffaab18d5a976.png'
			}]
		}},

		init: function init() {
			var storage = __weex_require__('@weex-module/storage');
			storage.setItem('timer_stat', 'FALSE');
			storage.setItem('rest_stat', 'FALSE');
		},
		ready: function ready() {
			var storage = __weex_require__('@weex-module/storage');
			var self = this;

			storage.getItem('first_flag', function (e) {
				if (e.data == 'NOTFIRST') {
					storage.getItem('timer', function (e) {
						self.timer_minute = parseInt(e.data);
						if (self.timer_minute < 10) self.timer_show = "0" + self.timer_minute + ":00";else self.timer_show = self.timer_minute + ":00";
					});

					storage.getItem('rest', function (e) {
						self.rest_minute = parseInt(e.data);
						if (self.rest_minute < 10) self.rest_show = "0" + self.rest_minute + ":00";else self.rest_show = self.rest_minute + ":00";
					});

					storage.getItem('today_date', function (e) {
						var nowtime = new Date();
						self.today_date = nowtime.getDate();

						var date_rec = parseInt(e.data);
						if (self.today_date != date_rec) {
							storage.getItem('day_num', function (e) {
								self.day_num = parseInt(e.data) + 1;
								storage.setItem('day_num', self.day_num);
							});
							storage.getItem('week_cnt', function (e) {
								self.week_cnt = JSON.parse(e.data);
								self.week_cnt[nowtime.getDay()] = 0;
								storage.setItem('week_cnt', (0, _stringify2.default)(self.week_cnt));
							});
							storage.setItem('today_cnt', self.today_cnt);
							storage.setItem('today_date', self.today_date);
						} else {
							storage.getItem('day_num', function (e) {
								self.day_num = parseInt(e.data);
							});
							storage.getItem('today_cnt', function (e) {
								self.today_cnt = parseInt(e.data);
							});
							storage.getItem('week_cnt', function (e) {
								self.week_cnt = JSON.parse(e.data);
							});
						}

						storage.getItem('tot_cnt', function (e) {
							self.tot_cnt = parseInt(e.data);
						});
					});
				} else {
						self.timer_minute = 25;
						self.timer_show = '25:00';
						self.rest_minute = 5;
						self.rest_show = '05:00';

						storage.setItem('timer', self.timer_minute);
						storage.setItem('rest', self.rest_minute);
						storage.setItem('pomo_record', (0, _stringify2.default)(self.pomo_record));
						storage.setItem('task_record', (0, _stringify2.default)(self.task_record));

						var nowtime = new Date();
						self.today_date = nowtime.getDate();
						self.day_num = 1;
						self.tot_cnt = 0;
						self.today_cnt = 0;
						self.week_cnt = [0, 0, 0, 0, 0, 0, 0];
						storage.setItem('today_date', self.today_date);
						storage.setItem('day_num', self.day_num);
						storage.setItem('tot_cnt', self.tot_cnt);
						storage.setItem('today_cnt', self.today_cnt);
						storage.setItem('week_cnt', (0, _stringify2.default)(self.week_cnt));
					}
			});
		},
		created: function created() {
			var _this = this;

			this.$on('naviBar.leftItem.click', function (e) {
				this.setting_timer();
			});
			this.$on('naviBar.rightItem.click', function (e) {
				if (!this.timer_is_run) {
					this.start();
				} else {
					this.confirm_stop();
				}
			});

			this.$on("switchPage", function (e) {
				_this.page = e.detail.page;
			});
		},

		methods: {
			start: function start() {
				var storage = __weex_require__('@weex-module/storage');
				var self = this;

				this.startTime = new Date();
				this.endTime = this.startTime.getTime() + this.timer_minute * 60 * 1000;
				timer = setInterval(this.freshtime.bind(this), 500);
				this.timer_icon_src = 'http://i1.piimg.com/567571/0ad69f99be49cc41.png';
				this.timer_is_run = true;
				self.$broadcast('timer_stat', { stat: 'TRUE' });
				storage.setItem('timer_stat', 'TRUE');
			},

			confirm_stop: function confirm_stop() {
				var modal = __weex_require__('@weex-module/modal');
				var self = this;

				if (this.rest_is_run) {
					this.stop();
					return;
				}

				var msg = "Pomodoro cannot be suspended, do you really want to abandon?";
				var ok_title = "ABANDON POMO";
				var cancel_title = "CANCEL";
				modal.confirm({
					'message': msg,
					'okTitle': ok_title,
					'cancelTitle': cancel_title
				}, function (result) {
					if (result == ok_title) self.stop();
				});
			},

			stop: function stop() {
				var storage = __weex_require__('@weex-module/storage');
				var self = this;

				this.startTime = '';
				clearInterval(timer);
				if (self.timer_minute < 10) self.timer_show = "0" + self.timer_minute + ":00";else self.timer_show = self.timer_minute + ":00";
				if (self.rest_minute < 10) self.rest_show = "0" + self.rest_minute + ":00";else self.rest_show = self.rest_minute + ":00";
				this.timer_icon_src = 'http://p1.bqimg.com/567571/828eec3b5562dc2b.png';

				this.timer_is_run = false;
				self.$broadcast('timer_stat', { stat: 'FALSE' });
				storage.setItem('timer_stat', 'FALSE');

				this.rest_is_run = false;
				self.$broadcast('rest_stat', { stat: 'FALSE' });
				storage.setItem('rest_stat', 'FALSE');
			},

			rest: function rest() {
				var storage = __weex_require__('@weex-module/storage');
				var self = this;

				this.startTime = new Date();
				this.endTime = this.startTime.getTime() + this.rest_minute * 60 * 1000;
				clearInterval(timer);
				timer = setInterval(this.freshtime.bind(this), 500);

				this.rest_is_run = true;
				self.$broadcast('rest_stat', { stat: 'TRUE' });
				storage.setItem('rest_stat', 'TRUE');
			},

			freshtime: function freshtime() {
				var nowtime = new Date();
				var lefttime = parseInt((this.endTime - nowtime.getTime()) / 1000);
				var minute = parseInt(lefttime / 60 % 60);
				var second = parseInt(lefttime % 60);
				var min_show = '' + minute;
				var sec_show = '' + second;
				if (minute < 10) min_show = '0' + min_show;
				if (second < 10) sec_show = '0' + sec_show;

				if (this.rest_is_run) this.rest_show = min_show + ':' + sec_show;else this.timer_show = min_show + ':' + sec_show;

				if (lefttime < 0) {
					var storage = __weex_require__('@weex-module/storage');
					var self = this;

					if (this.rest_is_run) {

						var title_first = '';
						var title_cnt = 0;

						storage.getItem('pomo_record', function (e) {
							self.pomo_record = JSON.parse(e.data);

							for (var i = 0; i < self.task.length; i++) {
								if (self.task[i].is_selected) {
									if (title_first == '') title_first = self.task[i].name;
									title_cnt = title_cnt + 1;
								}
							}
							var title_t = '';

							if (title_cnt == 0) title_t = 'No selected task';else if (title_cnt == 1) title_t = title_first;else title_t = '"' + title_first + '" and other ' + (title_cnt - 1) + ' task';

							var e = new Date();
							var s = new Date();
							s.setTime(e.getTime() - self.rest_minute * 60 * 1000);
							var rec = { title: title_t, stat: 'rest', start: s.getHours() + ':' + s.getMinutes(),
								end: e.getHours() + ':' + e.getMinutes(),
								date: e.getFullYear() + '/' + (e.getMonth() + 1) + '/' + e.getDate()
							};

							self.pomo_record.push(rec);

							storage.setItem('pomo_record', (0, _stringify2.default)(self.pomo_record));
						});

						this.stop();
					} else {
							storage.getItem('task', function (e) {
								self.task = JSON.parse(e.data);

								for (var i = 0; i < self.task.length; i++) {
									if (self.task[i].is_selected) {
										self.task[i].pomo_cnt = self.task[i].pomo_cnt + 1;
									}
								}
								storage.setItem('task', (0, _stringify2.default)(self.task));

								var title_first = '';
								var title_cnt = 0;
								storage.getItem('pomo_record', function (e) {
									self.pomo_record = JSON.parse(e.data);
									for (var i = 0; i < self.task.length; i++) {
										if (self.task[i].is_selected) {
											if (title_first == '') title_first = self.task[i].name;
											title_cnt = title_cnt + 1;
										}
									}
									var title_t = '';

									if (title_cnt == 0) title_t = 'No selected task';else if (title_cnt == 1) title_t = title_first;else title_t = '"' + title_first + '" and other ' + (title_cnt - 1) + ' task';

									var e = new Date();
									var s = new Date();
									s.setTime(e.getTime() - self.rest_minute * 60 * 1000);
									var rec = { title: title_t, stat: 'pomodoro', start: s.getHours() + ':' + s.getMinutes(),
										end: e.getHours() + ':' + e.getMinutes(),
										date: e.getFullYear() + '/' + (e.getMonth() + 1) + '/' + e.getDate()
									};

									self.pomo_record.push(rec);

									storage.setItem('pomo_record', (0, _stringify2.default)(self.pomo_record));
								});

								storage.getItem('today_cnt', function (e) {
									self.today_cnt = parseInt(e.data);
									self.today_cnt = self.today_cnt + 1;
									storage.setItem('today_cnt', self.today_cnt);
								});
								storage.getItem('tot_cnt', function (e) {
									self.tot_cnt = parseInt(e.data);
									self.tot_cnt = self.tot_cnt + 1;
									storage.setItem('tot_cnt', self.tot_cnt);
								});
								storage.getItem('week_cnt', function (e) {
									self.week_cnt = JSON.parse(e.data);
									var nowtime = new Date();
									self.week_cnt[nowtime.getDay()] = self.week_cnt[nowtime.getDay()] + 1;
									storage.setItem('week_cnt', (0, _stringify2.default)(self.week_cnt));
								});
							});
							this.rest();
						}
				}
			},

			setting_timer: function setting_timer() {
				var modal = __weex_require__('@weex-module/modal');
				var storage = __weex_require__('@weex-module/storage');
				var self = this;

				if (this.timer_is_run) {
					this.$call('modal', 'toast', { 'message': 'Pomo timer setting is disabled because you are currently in a pomo', 'duration': 2 });
					return;
				}

				modal.prompt({
					'message': 'Rest timer setting (1-10 mins)',
					'okTitle': 'OK',
					'cancelTitle': 'CANCEL'
				}, function (result) {
					if (result.result == 'OK') {
						var minute = parseInt(result.data);
						if (minute >= 1 && minute <= 10) {
							self.rest_minute = minute;
							if (self.rest_minute < 10) self.rest_show = "0" + self.rest_minute + ":00";else self.rest_show = self.rest_minute + ":00";
							storage.setItem('rest', self.rest_minute);
							self.$call('modal', 'toast', { 'message': 'Set rest timer successfully', 'duration': 2 });
						}
					}
				});

				modal.prompt({
					'message': 'Pomo timer setting (10-60 mins)',
					'okTitle': 'OK',
					'cancelTitle': 'CANCEL'
				}, function (result) {
					if (result.result == 'OK') {
						var minute = parseInt(result.data);
						if (minute >= 1 && minute <= 60) {
							self.timer_minute = minute;
							if (self.timer_minute < 10) self.timer_show = "0" + self.timer_minute + ":00";else self.timer_show = self.timer_minute + ":00";
							storage.setItem('timer', self.timer_minute);
							self.$call('modal', 'toast', { 'message': 'Set pomo timer successfully', 'duration': 2 });
						}
					}
				});
			}
		}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);