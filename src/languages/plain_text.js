/*
Language: Plain text
Author: Egor Rogov (e.rogov@postgrespro.ru)
Description: Plain text without any highlighting.
Category: common
*/

export default function(hljs) {
  return {
    name: 'Plain_text',
    aliases: [
      'text',
      'txt'
    ],
    disableAutodetect: true
  };
}
