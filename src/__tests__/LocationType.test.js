import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import "../testSetup";
import LocationType from "../components/LocationType";

describe("<LocationType />", () => {
    it("component renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<LocationType />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("return div with text `Airport` if props `type` is A", () => {
        const wrapper = shallow(<LocationType type="A" />);
        expect(wrapper).toBeDefined();
        expect(wrapper.text()).toEqual("Airport");
    });
    it("return div with text `City` if props `type` is C", () => {
        const wrapper = shallow(<LocationType type="C" />);
        expect(wrapper).toBeDefined();
        expect(wrapper.text()).toEqual("City");
    });
    it("return default div with text `Station` if props `type` is not A or C", () => {
        const wrapper = shallow(<LocationType type="X" />);
        expect(wrapper).toBeDefined();
        expect(wrapper.text()).toEqual("Station");
    });
    it("return default div with text `Station` if props `type` is not defined", () => {
        const wrapper = shallow(<LocationType />);
        expect(wrapper).toBeDefined();
        expect(wrapper.text()).toEqual("Station");
    });
});
