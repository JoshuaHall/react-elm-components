declare module "react-elm-components" {
    interface ElmProps {
        src: any;
        ports?: any;
    }

    export = function (props: ElmProps): React.ReactElement<any> { }
}