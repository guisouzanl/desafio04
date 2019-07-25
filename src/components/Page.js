import React from 'react';
import SideMenu from './SideMenu';
import PostList from './PostList';

function Page() {
  return (
    <div className="feed-page">
      <SideMenu />
      <PostList />
    </div>
  );
}

export default Page;
