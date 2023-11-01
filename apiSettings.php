<?php

function change_api() {
  return 'json';
}

add_filter('rest_url_prefix', 'change_api');

function expire_token_api() {
  return time() + (60 * 60 * 24);
}

add_filter('jwt_auth_expire', 'expire_token_api');