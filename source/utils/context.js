export const context = function(){
  return require.context('../pages/Door/components/Technology/demo/components/', true, /^\.\/[\s\S]*\/index\.js$/);
}