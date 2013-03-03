[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/764b03afae296ccd16ff333a1f3cec81 "githalytics.com")](http://githalytics.com/dejitaiza/Jadows)

Jadows
======

Jadows is a JS shadows renderer embedded in a webpage. It contains 3 AMD modules ( mouse.js for mouse tracking, angle.js for angles calculations, and shads.js for the shadow renderer )
It could be used for some cool effects, but I can't imagine a lot for now. Feel free to use it and push any demo back to me :)

How to use it :
---------------

1. Require shad.js module
2. Set a light source : jadows.setSource('#lightsource-id')
3. Add blocks or text to the engine : jadows.addShad('#block-id','box') for a box-shadow effect, and .addShad('#text-id','text') for a text-shadow effect
4. Render ! jadows.render()
5. You're done :)

Have fun !

