import _ from 'lodash';
import { Toast } from 'antd-mobile';
import env from 'environment';
import router from 'umi/router';


/**
 * process error during rest access
 * @param e
 */
export default function(e) {
  const { extra, request } = e;
  const { url, options: { method } } = request;
  const { endpoint } = env;

  if (!_.startsWith(url, endpoint)) {
    throw `url not start with ${endpoint}`;
  }

  let path = url.substring(endpoint.length);
  path = _.startsWith(path, '/') ? path : `/${path}`;

  if (extra.status == 401) {
    process_401(e, path);
  }

}

function process_401(e, path) {
  const { extra, request } = e;
  const { url, options: { method } } = request;
  const { endpoint } = env;

  // GET /system/session
  // no notify , but redirect to /login
  if (method == 'GET' && _.startsWith(path, '/system/session')) {
    router.push('/login');
  }

  // POST /system/session
  // notify, but don't redirect to /login
  else if (method == 'POST' && _.startsWith(path, '/system/session')) {
    notifyError(
      extra.statusText,
      extra.status,
      request.url,
      extra.data? extra.data.message : extra.statusText,
      request.options.method
    );
  }

  // other requests
  // notify, and redirect to /login
  else {
    notifyError(
      extra.statusText,
      extra.status,
      request.url,
      extra.data? extra.data.message : extra.statusText,
      request.options.method
    );
    router.push('/login');
  }

}

function notifyError(error, status, url, message, method) {
  Toast.fail(message, 2);
}
