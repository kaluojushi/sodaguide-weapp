// 本文件由FirstUI授权予马*健（会员ID：3  1 56，身份证尾号： 0 1 04 3X）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
/*
Language: C
Category: common, system
Website: https://en.wikipedia.org/wiki/C_(programming_language)

Modified by: firstui
organization: FirstUI(https://www.firstui.cn/)
*/

import cLike from './c-like.js';

/** @type LanguageFn */
export default function(hljs) {
  const lang = cLike(hljs);
  // Until C is actually different than C++ there is no reason to auto-detect C
  // as it's own language since it would just fail auto-detect testing or
  // simply match with C++.
  //
  // See further comments in c-like.js.

  // lang.disableAutodetect = false;
  lang.name = 'C';
  lang.aliases = ['c', 'h'];
  return lang;
}