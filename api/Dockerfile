FROM postgres:13.3 
ENV TZ=Etc/UTC 
RUN ln -snf /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone 
RUN dpkg-reconfigure tzdata -f noninteractive 

RUN apt-get update && apt-get install -y postgresql-contrib

EXPOSE 5432

# Inicia o PostgreSQL
CMD ["postgres"]