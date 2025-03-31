# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Pluralize table names in database
ActiveRecord::Base.pluralize_table_names = false

# Configuracion de visualizacion de fechas

Time::DATE_FORMATS[:default] = '%d-%m-%Y %H:%M:%S'
Date::DATE_FORMATS[:default] = '%d-%m-%Y'
