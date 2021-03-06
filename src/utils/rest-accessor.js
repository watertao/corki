import request from './request';
import env from 'environment';
import restErrProcessor from './rest-err-processor';


const JSON_CONTENT_HEADER = {
  'Content-Type': 'application/json; charset=utf-8'
};


/**
 * HTTP GET 方法
 *
 * @param uri
 * @param pathVariables
 * @param filterParams
 * @returns {Promise<void>}
 */
export async function get(uri, pathVariables, filterParams) {
  let options = { method: 'GET' };
  options = _appendXAuthTokenHeader(options);
  try {
    return await request(resolveQualifiedURL(uri, pathVariables, filterParams), options);
  } catch (e) {
    processError(e);
    throw e;
  }
}


export async function post(uri, pathVariables, filterParams, data) {
  let options = { method: 'POST', body: JSON.stringify(data) };
  options = _appendXAuthTokenHeader(options);
  options = _appendJsonContentHeader(options);
  try {
    return await request(resolveQualifiedURL(uri, pathVariables), options);
  } catch (e) {
    processError(e);
    throw e;
  }
}

export async function put(uri, pathVariables, filterParams, data) {
  let options = { method: 'PUT', body: JSON.stringify(data) };
  options = _appendXAuthTokenHeader(options);
  options = _appendJsonContentHeader(options);
  try {
    return await request(resolveQualifiedURL(uri, pathVariables), options);
  } catch (e) {
    processError(e);
    throw e;
  }
}

export async function patch(uri, pathVariables, filterParams, data) {
  let options = { method: 'PATCH', body: JSON.stringify(data) };
  options = _appendXAuthTokenHeader(options);
  options = _appendJsonContentHeader(options);
  try {
    return await request(resolveQualifiedURL(uri, pathVariables), options);
  } catch (e) {
    processError(e);
    throw e;
  }
}

export async function del(uri, pathVariables, filterParams) {
  let options = { method: 'DELETE' };
  options = _appendXAuthTokenHeader(options);
  try {
    return await request(resolveQualifiedURL(uri, pathVariables, filterParams), options).catch(processError);
  } catch (e) {
    processError(e);
    throw e;
  }
}

function processError(ex) {
  restErrProcessor(ex);
}

function resolveQualifiedURL(uri, pathVariables, filterParams) {
  if (!uri.startsWith('/')) {
    throw new SyntaxError('uri should be start with /');
  }

  let newUri = uri;

  // process path variables
  if (pathVariables) {
    for (let variable in pathVariables) {
      newUri = newUri.replace(':' + variable, pathVariables[variable].toString());
    }
  }

  // process filter parameters
  if (filterParams) {
    let filterParamsClause = '';
    Object.keys(filterParams).forEach(key => {
      if (filterParams[key] != null) {
        if (filterParamsClause == '') {
          filterParamsClause = `?${key}=${filterParams[key]}`;
        } else {
          filterParamsClause += `&${key}=${filterParams[key]}`;
        }
      }
    });
    newUri += filterParamsClause;
  }

  return env.endpoint + newUri;
}


function _appendJsonContentHeader(option) {
  let newOptions = {...option};
  newOptions.headers = {
    ...JSON_CONTENT_HEADER,
    ...newOptions.headers,
  };
  return newOptions;
}

function _appendXAuthTokenHeader(option) {
  let newOptions = {...option};
  if (sessionStorage.getItem('auth_token')) {
    newOptions.headers = {
      'X-Auth-Token': sessionStorage.getItem('auth_token'),
      ...newOptions.headers,
    };
  }
  return newOptions;
}
