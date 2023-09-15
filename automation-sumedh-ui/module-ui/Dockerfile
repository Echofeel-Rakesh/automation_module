FROM registry.access.redhat.com/ubi8/nginx-118:1-31.1626836575
USER 0
COPY ./dist/entportal-module-ui /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY Kolkata /etc/localtime
COPY Kolkata /usr/share/zoneinfo/Asia/Kolkata
RUN chown -R nginx:0 /var/log/nginx /var/run /etc/nginx /var/cache/ && \
chmod 777  /var/log/nginx /var/run /etc/nginx /var/cache/
ENV TZ="Asia/Kolkata"
USER nginx
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 7078
