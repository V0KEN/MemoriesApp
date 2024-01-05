import React from 'react';
import renderer from 'react-test-renderer';
import AppButton from './components/AppButton';
import AppText from './components/AppText';

        
    test("AppText will render", () => {
        const json = renderer.create(<AppText />).toJSON();
        console.log(json.props.style);
        expect(json.props.style[0].fontSize).toBe(18);
        expect(json.props.style[0].fontFamily).toBe("AppleSDGothicNeo-Regular");
    });

    test("AppText will contain text", () => {
        const json = renderer.create(<AppText>There is something in here</AppText>).toJSON();
        expect(json.props.style[0].fontSize).toBe(18);
        expect(json.props.style[0].fontFamily).toBe("AppleSDGothicNeo-Regular");
        expect(json.children.includes("There is something in here"));
    });

    test("AppButton will render", () => {
        const json = renderer.create(<AppButton/>).toJSON();
        console.log(json.props.button);
    });

