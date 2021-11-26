export const  config = (props: IConfig):IConfig => {
    globalThis.oiellyAPI = props.apiKey;
    return props;
};

export interface IConfig {
    apiKey: string;
}

 