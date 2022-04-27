FROM oraclelinux:7-slim

ARG ORACLE_VERSION=19.3
ARG NODE_VERSION=16.x

RUN yum install -y \
        tar \
        gzip \
        sudo \
        git \
        curl \
        oracle-release-el7 && \
    curl -sL https://rpm.nodesource.com/setup_${NODE_VERSION} | sudo bash - && \
    yum install -y \
        nodejs && \
    yum-config-manager --enable ol7_oracle_instantclient && \
    yum install -y \
        oracle-instantclient${ORACLE_VERSION}-basic \
        oracle-instantclient${ORACLE_VERSION}-devel \
        oracle-instantclient${ORACLE_VERSION}-sqlplus && \
    rm -rf /var/cache/yum
