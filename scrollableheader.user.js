// ==UserScript==
// @name        ScrollingHeader
// @namespace   LambdaEro@github.com
// @description Makes header scrollable
// @include     http://www.tsumino.com/Home/Read/*
// @version     1
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @grant       none
// ==/UserScript==
$(".navbar-fixed-top").css("position","absolute");
$("body").css("padding-top", 0);
