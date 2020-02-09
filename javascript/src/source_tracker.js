/**
* @file source_tracker.js
* @author Lufan Li <lufan.js@gmail.com>
* @copyright Lufan Li 2020
* @license MIT
*/
(function () {
  /** 
  * SourceTracker constructor function
  * @summary SourceTracker constructor function.
  * @param {string} parentQueryStr - String value for querySelector to find the parent DOM element.
  */
  var document = window.document;

  function SourceTracker () {
    this.parent = null;
    this.screen = null;
    this.observer = null;
  }

  /** 
  * Insert log DOM element on the page.
  * @summary Insert a <div> on the page for logging later.
  */
  SourceTracker.prototype.render = function () {
    this.screen = document.createElement('div');
    this.screen.style.cssText = "width: 100%; height: 100%;";
    this.screen.innerHTML = 'SourceTracker installed.';
    this.parent.appendChild(this.screen); 
  }

  /** 
  * Install SourceTracker on the page.
  * @summary Start tracking source on the page, and render log window on the DOM.
  * @param {ParamDataTypeHere} parameterNameHere - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
  * @return {ReturnValueDataTypeHere} Brief description of the returning value here.
  */  
  SourceTracker.prototype.install = function (parentQueryStr) {
    this.parent = document.querySelector(parentQueryStr);
    console.log(document, this.parent)
    this.render();
  }

  /** 
  * Append new log to log window on the DOM
  * @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
  * @param {ParamDataTypeHere} parameterNameHere - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
  * @return {ReturnValueDataTypeHere} Brief description of the returning value here.
  */
  SourceTracker.prototype.log = function (msg) {
    var log = document.createELement('span');
    log.innerHTML = msg;
    this.screen.appendChild(log);
  }

  window.SourceTracker = SourceTracker;
})();