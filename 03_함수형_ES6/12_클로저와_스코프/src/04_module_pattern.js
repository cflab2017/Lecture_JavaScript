/**
 * IIFE 모듈 패턴
 */
"use strict";

const Logger = (() => {
  let level = "info";
  function setLevel(l) { level = l; }
  function log(msg) { console.log(`[${level}] ${msg}`); }
  return { setLevel, log };
})();

Logger.log("start");
Logger.setLevel("warn");
Logger.log("careful");
