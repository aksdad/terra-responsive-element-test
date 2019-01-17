import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

window.resizeTo = (width, height) => {
    window.innerWidth = width || window.innerWidth;
    window.innerHeight = height || window.innerHeight;
    window.dispatchEvent(new Event('resize'));
};

configure({ adapter: new Adapter() });
