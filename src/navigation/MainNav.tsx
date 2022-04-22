import React from 'react';
import { AuthNav } from './navigators/AuthNav';
import { TabsNav } from './navigators/TabsNav';

const status : boolean = true;

export const MainNav = () => {
  return (
      ( status )
        ? <AuthNav />
        : <TabsNav />
  )
}
