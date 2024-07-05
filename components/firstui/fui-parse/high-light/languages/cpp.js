// 本文件由FirstUI授权予马*健（会员ID：31 5  6，身份证尾号：01 0  4 3X）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
/*
Language: C++
Category: common, system
Website: https://isocpp.org

Modified by: firstui
organization: FirstUI(https://www.firstui.cn/)
*/

import cLike from './c-like.js';

/** @type LanguageFn */
export default function(hljs) {
  const lang = cLike(hljs);
  // return auto-detection back on
  lang.disableAutodetect = false;
  lang.name = 'C++';
  lang.aliases = ['cc', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'];
  return lang;
}