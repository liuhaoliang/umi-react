import React from 'react';
import Link from 'umi/link';
import Exception from '@/components/Exception';

export default () => (
  <Exception type="404" linkElement={Link} desc="页面未找到" backText="返回首页" />
);
