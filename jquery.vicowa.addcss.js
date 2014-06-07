// JQuery extension that allows to simply add and remove css files
// V1.0
// Copyright (C) 2014 www.ViCoWa.com
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
// to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
// and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


// usage: var AddedCSS = $.addCSS(["css1.css", "css2.css"]);
// .
// .
// use the following code to unload your css files
// AddedCSS.destroy();


(function(factory)
{
    if (typeof define === 'function' && define.amd)
    {
        define(['jquery'], factory);
    }
    else 
    {
        factory(jQuery);
    }
}(function($)
{
    $.addCSS = function(p_CSSPath)
    {
        var CSSPaths = ($.isArray(p_CSSPath)) ? p_CSSPath : [p_CSSPath],
        addedCSS = [];
        
        $.each(CSSPaths, function(p_Index, p_Path)
        {
            // we will only have an added css if it was not already in there, else the original owner should remove it on destroy
            var $newCSS = ($("link[href='" + p_Path + "']").length) ? null : $("<link/>", 
            {
               rel: "stylesheet",
               type: "text/css",
               href: p_Path
            }).appendTo("head");
            
            if ($newCSS)
            {
                addedCSS.push($newCSS);
            }
        });

        return {
            // on destroy remove the css links that were added
            destroy : function()
            {
                $.each(addedCSS, function(p_Index, $p_CSS)
                {
                    $p_CSS.remove();
                });
                addedCSS = [];
            }
        };
    };
}));

