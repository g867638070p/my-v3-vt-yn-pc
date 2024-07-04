// 树形数组扁平化 递归方式
function flatten(data) {
   return data.reduce((prev, cur) => {
      prev.push({ path: cur.path, name: cur.name, lable: cur.lable, icon: cur.icon, url: cur.url });
      if (cur.children) {
         prev.push(...flatten(cur.children));
      }
      return prev;
   }, []);
}
// 树形数组扁平化 迭代方式
function flattenTree(tree) {
   let result = [];
   let queue = [...tree];
   while (queue.length > 0) {
      let node = queue.shift();
      result.push(node);
      if (node.children && node.children.length > 0) {
         queue = queue.concat(node.children);
      }
   }
   return result;
}

function findPathToNode(tree, targetValue, path = []) {
   for (let i = 0; i < tree.length; i++) {
      const currentPath = path.concat(tree[i]);
      if (tree[i].name === targetValue) {
         return currentPath;
      }
      if (tree[i].children) {
         const foundPath = findPathToNode(tree[i].children, targetValue, currentPath);
         if (foundPath) {
            return foundPath;
         }
      }
   }
   return null;
}

export { flatten, flattenTree, findPathToNode };
