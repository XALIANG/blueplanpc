import Vue from 'vue';
import 'ant-design-vue/dist/antd.css'
import {message,notification} from 'ant-design-vue';

window.Message = message;
window.Notification = notification;
import {
    Button,
    Menu,
    Tag,
    Tabs,
    Card,
    Icon,
    List,
    Radio,
    Layout,
    FormModel,
    Carousel,
    Checkbox,
    Skeleton,
    Dropdown,
    Breadcrumb,
    Drawer,
    Input,
    Table,
    Avatar,
    Divider,
    ConfigProvider
} from 'ant-design-vue';
Vue.use(Tag);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Tabs);
Vue.use(Dropdown);
Vue.use(Radio);
Vue.use(Skeleton);
Vue.use(Card);
Vue.use(List);
Vue.use(Carousel);
Vue.use(Avatar);
Vue.use(Drawer);
Vue.use(Input);
Vue.use(FormModel);
Vue.use(Checkbox);
Vue.use(Table);
Vue.use(Layout);
Vue.use(Divider);
Vue.use(Breadcrumb);
Vue.use(ConfigProvider);

