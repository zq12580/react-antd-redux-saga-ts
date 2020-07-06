import ClientManagement from "../pages/clientManagement";
import ChanceManagement from "../pages/chanceManagement";
import { NavList } from "../../global";


export const navList: NavList[] = [
  { key: '2', title: '客户管理', path: '/client', component: ClientManagement },
  { key: '3', title: '商机管理', path: '/chance', component: ChanceManagement },
  { key: '4', title: '合同管理', path: '/tab4', component: () => '合同管理' },
  { key: '5', title: '拜访记录', path: '/tab5', component: () => '拜访记录' },
  { key: '6', title: '客户移交', path: '/tab6', component: () => '客户移交' },
  { key: '7', title: '用户管理', path: '/tab7', component: () => '用户管理' },
]

