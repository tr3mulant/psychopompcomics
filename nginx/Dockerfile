# Base on offical NGINX Alpine image
FROM jonasal/nginx-certbot:2.4.1
ARG APP_ENV

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./conf.d/psychopompcomics.$APP_ENV.conf /etc/nginx/conf.d/

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD ["nginx", "-g", "daemon off;"]