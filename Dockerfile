FROM ubuntu:latest

LABEL maintainer="jersohn"
LABEL description="Docker image for Jersohn's portfolio"

# Mise à jour et installation des paquets
RUN apt-get update && \
    apt-get install -y \
    git \
    apache2 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Supprime le contenu par défaut d'Apache et clone
RUN rm -rf /var/www/html/* && \
    git clone https://github.com/Jersohn/portfolio.git /var/www/html && \
    chown -R www-data:www-data /var/www/html


# Ports exposés
EXPOSE 80

# Commande de démarrage
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
