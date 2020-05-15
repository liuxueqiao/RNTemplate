import {Config} from '../const/index';

/**
 * Created by liuXueQiao
 *
 * description:网络请求
 *
 */
export default class {
  success(response) {}

  fail(response) {}

  async request(path, params, config) {
    let _params = this._baseParams();
    if (params && params.length > 0) {
      _params = _params.concat(params);
    }
    const response = await axios.post(Config.BaseUrl + path, _params);
    if (response) {
      this.success(response);
    } else {
      this.fail(response);
    }
  }

  _baseParams() {
    return {
      usrId: '',
    };
  }
}
