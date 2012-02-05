/*
 * Copyright (C) 2011 Tanooj Luthra <tanoojl@gmail.com>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function beautifier()
{
    function insertCSS(url)
    {
        var head = document.getElementsByTagName("head")[0];         
        var css = document.createElement("link");
        css.type = "text/css";
        css.rel = "stylesheet";
        css.href = url;
        head.appendChild(css);
    }
    function fixLogo()
    {
        var imgURL = chrome.extension.getURL("images.png");
        document.getElementById("pagelogo").backgroundImage = imgURL
    }
    insertCSS(chrome.extension.getURL("facebook-beautifier.css"));
    Hyphenator.run();
    $('div').remove('#pagelet_ticker');
    $('div').remove('.ego_column');
    $('div').remove('.ego_section');
    $('div').remove('#pagelet_navigation');
    $('div').remove('#pagelet_ego_pane_m');
    $('div').remove('#pagelet_rhc_ticker');
}

beautifier();
