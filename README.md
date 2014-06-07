jquery.vicowa.addcss
====================

JQuery plugin to add and remove css files

usage : 

```
var FirstAddedCSSFiles = $.addcss(["<pathtocss>/first.css", "<pathtocss>/second.css"]);
var SecondAddedCSSFiles = $.addcss(["<pathtocss>/third.css", "<pathtocss>/fourth.css"]);
```

When you are done with a particular set of css files just call : 

```
FirstAddedCSSFiles.destroy();
```

This will only remove the css files in that particular set (i.e. "first.css" and "second.css")


