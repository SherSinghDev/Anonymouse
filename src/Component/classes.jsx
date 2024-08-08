import { useSelector } from "react-redux";

const sidebar = useSelector((state) => state.sidebar)
function sectionClass(section) {
    const secClass = !sidebar ? `section section-full ${section}` : `section ${section}`;
    return secClass
}
let barClass = !sidebar ? "add-side" : "add-side d-none";
let sideClass = !sidebar ? "sidebar side-hidden" : 'sidebar';

export {sectionClass,barClass,sideClass}