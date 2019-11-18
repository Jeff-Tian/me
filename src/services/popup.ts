export const popupHtml = `<html>
  <head>
    <title>第三方登录 我的个人中心</title>
  </head>
  <body>
    <p>正在加载中, 请稍等 ……</p>
    <script>
      window.addEventListener(
        "message",
        function(event) {
          console.log(event.data);

          if (
            event.data.indexOf("http://") === 0 ||
            event.data.indexOf("https://") === 0 ||
            event.data.indexOf("//") === 0
          ) {
            location.href = event.data;
          }
        },
        false
      );

      window.opener.postMessage("listenerLoaded", window.location.origin);
    </script>
  </body>
</html>
`;
