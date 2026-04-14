// 魔珐星云SDK配置文件
// 请根据您的实际配置修改以下参数，或在页面配置按钮中设置

// 从localStorage读取配置的辅助函数
function getConfig(key, defaultValue) {
    try {
        const stored = localStorage.getItem(key);
        return stored !== null && stored !== "" ? stored : defaultValue;
    } catch (e) {
        return defaultValue;
    }
}

const xingyunConfig = {
    get appId() { return getConfig('xingyun_appId', ""); },
    get appSecret() { return getConfig('xingyun_appSecret', ""); },
    get gatewayServer() { return getConfig('xingyun_gatewayServer', "https://nebula-agent.xingyun3d.com/user/v1/ttsa/session"); }
};

const doubaoConfig = {
    get apiKey() { return getConfig('doubao_apiKey', ""); },
    get apiUrl() { return getConfig('doubao_apiUrl', "https://ark.cn-beijing.volces.com/api/v3/chat/completions"); },
    get model() { return getConfig('doubao_model', ""); }
};

// 保存配置到localStorage
function saveConfig(config) {
    if (config.xingyun_appId !== undefined) localStorage.setItem('xingyun_appId', config.xingyun_appId);
    if (config.xingyun_appSecret !== undefined) localStorage.setItem('xingyun_appSecret', config.xingyun_appSecret);
    if (config.xingyun_gatewayServer !== undefined) localStorage.setItem('xingyun_gatewayServer', config.xingyun_gatewayServer);
    if (config.doubao_apiKey !== undefined) localStorage.setItem('doubao_apiKey', config.doubao_apiKey);
    if (config.doubao_apiUrl !== undefined) localStorage.setItem('doubao_apiUrl', config.doubao_apiUrl);
    if (config.doubao_model !== undefined) localStorage.setItem('doubao_model', config.doubao_model);
}

// 检查配置是否完整
function isConfigComplete() {
    return xingyunConfig.appId && xingyunConfig.appSecret &&
           doubaoConfig.apiKey && doubaoConfig.model;
}

// 获取当前配置对象
function getCurrentConfig() {
    return {
        xingyun_appId: xingyunConfig.appId,
        xingyun_appSecret: xingyunConfig.appSecret,
        xingyun_gatewayServer: xingyunConfig.gatewayServer,
        doubao_apiKey: doubaoConfig.apiKey,
        doubao_apiUrl: doubaoConfig.apiUrl,
        doubao_model: doubaoConfig.model
    };
}