var Device = {
  "iphone": (navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1),
  "ipad": (navigator.userAgent.indexOf("iPad") != -1),
  "android": (navigator.userAgent.indexOf("Android") != -1)
};
Device.desktop = !Device.iphone && !Device.ipad && !Device.android;
Device.iOS = Device.iphone || Device.ipad;