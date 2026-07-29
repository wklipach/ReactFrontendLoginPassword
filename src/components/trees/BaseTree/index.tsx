import React from 'react';
import { Tree } from 'antd';
import type { GetProps, TreeDataNode } from 'antd';

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>;
type TreeProps = GetProps<typeof Tree>;

export interface BaseTreeProps {
  /** Данные дерева */
  treeData: TreeDataNode[];
  /** Режим выбора: 'single' или 'multiple' */
  multiple?: boolean;
  /** Возможность перетаскивания */
  draggable?: boolean;
  /** Развернуть все узлы по умолчанию */
  defaultExpandAll?: boolean;
  /** Использовать DirectoryTree (с иконками папок) или обычный Tree */
  directory?: boolean;
  /** Обработчик выбора */
  onSelect?: DirectoryTreeProps['onSelect'] | TreeProps['onSelect'];
  /** Обработчик раскрытия */
  onExpand?: DirectoryTreeProps['onExpand'] | TreeProps['onExpand'];
  /** Дополнительные пропсы */
  [key: string]: any;
}

const BaseTree: React.FC<BaseTreeProps> = ({
  treeData,
  multiple = false,
  draggable = false,
  defaultExpandAll = false,
  directory = true,
  onSelect,
  onExpand,
  ...restProps
}) => {
  const TreeComponent = directory ? Tree.DirectoryTree : Tree;

  return (
    <TreeComponent
      treeData={treeData}
      multiple={multiple}
      draggable={draggable}
      defaultExpandAll={defaultExpandAll}
      onSelect={onSelect}
      onExpand={onExpand}
      {...restProps}
    />
  );
};

export default BaseTree;