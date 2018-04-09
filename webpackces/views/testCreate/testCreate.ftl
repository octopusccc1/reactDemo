<!DOCTYPE html>
<html>
<@headeWrapper>
<title>创建客群</title>
</@headeWrapper>
<body>
<@bodyWrapper>
    <@setting/>
    <script>
        window.setting.pageInfo ={
            customer:${customer!0}
        }
    </script>
</body>
    <@serverRenderReactDOM/>
<@bodyWrapper>
</html>