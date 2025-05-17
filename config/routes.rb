Rails.application.routes.draw do


  devise_for :usuarios, controllers: { sessions: 'usuarios/sessions',
                                       registrations: 'usuarios/registrations',
                                       passwords: 'usuarios/passwords' },
             path: '/',
             path_names: { sign_in: 'login', sign_out: 'logout', }
  # constrains es para limitar el uso al formato deseado solamente
  # en este caso, solo html, agregar :js o :json para esos casos
  resources :backups, only: [:index] do
    collection do
      post :resetear
      post :cargar
      post :descargar
      get :download
    end
  end
  resources :roles do
    member do
      get :permisos
      put :actualizarpermisos
    end
  end
  resources :registros, constraints: { format: :html }, except: [:update, :create, :show, :edit, :new]
  # boton volver como en materia_estados
  resources :consultas, constraints: { format: :html }, except: [:index, :show, :edit, :new] do
    collection do
      post :realizar
      post :responder
    end
    member do
      get :verrespuesta
      get :verconsulta
    end
  end
  resources :usuarios do
    member do
      put :actualizarperfil
      put :cambiarpassword
    end
  end
  resources :parametros, constraints: { format: :html }
  resources :items, constraints: { format: :html }, only: [:destroy, :actualizar] do
    collection do
      post :actualizar
    end
  end
  # resources :videos, constraints: { format: :html }
  resources :enlaces, constraints: { format: :html }, only: [:destroy, :actualizar] do
    collection do
      post :actualizar
    end
  end
  resources :documentos, constraints: { format: :html }
  resources :clases, constraints: { format: :html }, except: [:show, :index, :new] do
    member do
      put :setearvisible
      get :descargarpdf
      delete :borrar
    end
  end
  resources :carreras, constraints: { format: :html }
  resources :materias, constraints: { format: :html } do
    member do
      get :listar_participantes
    end
    resources :registros, only: [:new, :index, :destroy, :create, :asignar_profesor, :inscribir], constraints: { format: :html } do
      collection do
        get :asignar_profesor
        get :asignar_alumno
        post :asignar_a
        post :asignar_p
        post :inscribir
        get :desinscribir
      end
    end
    resources :clases, constraints: { format: :html } do
      collection do
        post :nueva_clase
      end
    end
    resources :materia_estados, only: [:index], constraints: { format: :html }
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # defaults to dashboard
  root to: redirect('/principal')

  # view routes
  # get '/widgets' => 'widgets#index'
  #
  # get 'dashboard/dashboard_v1'
  # get 'dashboard/dashboard_v2'
  # get 'dashboard/dashboard_v3'
  # get 'dashboard/dashboard_h'
  # get 'elements/button'
  # get 'elements/notification'
  # get 'elements/spinner'
  # get 'elements/animation'
  # get 'elements/dropdown'
  # get 'elements/nestable'
  # get 'elements/sortable'
  # get 'elements/card'
  # get 'elements/portlet'
  # get 'elements/grid'
  # get 'elements/gridmasonry'
  # get 'elements/typography'
  # get 'elements/fonticons'
  # get 'elements/weathericons'
  # get 'elements/colors'
  # get 'elements/buttons'
  # get 'elements/notifications'
  # get 'elements/carousel'
  # get 'elements/tour'
  # get 'elements/sweetalert'
  # get 'forms/standard'
  # get 'forms/extended'
  # get 'forms/validation'
  # get 'forms/wizard'
  # get 'forms/upload'
  # get 'forms/xeditable'
  # get 'forms/imgcrop'
  # get 'multilevel/level1'
  # get 'multilevel/level3'
  # get 'charts/flot'
  # get 'charts/radial'
  # get 'charts/chartjs'
  # get 'charts/chartist'
  # get 'charts/morris'
  # get 'charts/rickshaw'
  # get 'tables/standard'
  # get 'tables/extended'
  # get 'tables/datatable'
  # get 'tables/bootgrid'
  # get 'maps/google'
  # get 'maps/vector'
  # get 'extras/mailbox'
  # get 'extras/timeline'
  # get 'extras/calendar'
  # get 'extras/invoice'
  # get 'extras/search'
  # get 'extras/todoo'
  # get 'extras/profile'
  # get 'extras/contacts'
  # get 'extras/contact_details'
  # get 'extras/projects'
  # get 'extras/project_details'
  # get 'extras/team_viewer'
  # get 'extras/social_board'
  # get 'extras/vote_links'
  # get 'extras/bug_tracker'
  # get 'extras/faq'
  # get 'extras/help_center'
  # get 'extras/followers'
  # get 'extras/settings'
  # get 'extras/plans'
  # get 'extras/file_manager'
  # get 'blog/blog'
  # get 'blog/blog_post'
  # get 'blog/blog_articles'
  # get 'blog/blog_article_view'
  # get 'ecommerce/ecommerce_orders'
  # get 'ecommerce/ecommerce_order_view'
  # get 'ecommerce/ecommerce_products'
  # get 'ecommerce/ecommerce_product_view'
  # get 'ecommerce/ecommerce_checkout'
  # get 'forum/forum_categories'
  # get 'forum/forum_topics'
  # get 'forum/forum_discussion'
  # get 'pages/login'
  # get 'pages/register'
  # get 'pages/recover'
  # get 'pages/lock'
  # get 'pages/template'
  # get 'pages/notfound'
  # get 'pages/maintenance'
  # get 'pages/error500'
  get '/principal' => 'dashboard#principal'
  # get '/uso_cpu' => 'dashboard#uso_cpu'

  # api routes
  # api_guard_routes for: 'usuarios', only: [:authentication], controller: {
  #   authentication: 'usuarios/authentication'
  # }
  api_guard_routes for: 'usuarios', only: [:authentication]
  api_guard_scope 'usuarios' do
    post '/api/authentication' => 'usuarios/authentication#create'
  end
  post '/api/publicarclase' => 'api#publicarclase'
  get '/api/materiasprofesor' => 'api#materiasprofesor'
  get '/api/credenciales' => 'api#credenciales'
  get '/api/documentosprofesor' => 'api#documentosprofesor'
  get '/api/datosprofesor' => 'api#datosprofesor'
  # get '/api/datatable' => 'api#datatable'
  # get '/api/i18n/:locale' => 'api#i18n'
  # post '/api/xeditable' => 'api#xeditable'
  # get '/api/xeditable-groups' => 'api#xeditablegroups'

  # Rutas extra
  get '/reportes' => 'reportes#reportes_profesor', as: 'reportes_profesor'
  post '/reporte_anio' => 'reportes#reporte_anio', as: 'reporte_anio'
  post '/grupo_alumnos' => 'reportes#grupo_alumnos', as: 'grupo_alumnos'
  post '/reportecomparar' => 'reportes#reportecomparar', as: 'reportecomparar'
  post '/vista_clase' => 'reportes#vista_participante', as: 'vista_participante'
  post '/autoarchivar' => 'materias#autoarchivar', as: 'autoarchivar'
  post '/reporte_materia' => 'reportes#reporte_materia', as: 'reporte_materia'
  post '/reporte_clase' => 'reportes#reporte_clase', as: 'reporte_clase'
  get '/inscripciones' => 'registros#inscribir_alumno', as: 'inscribir_alumno'
  get '/misdatos' => 'usuarios#misdatos', :as => :misdatos
  get '/materias/:id/mostrar_participante/:id_participante' => 'materias#mostrar_participante', :as => :mostrar_participante
  # get '/backups' => 'backups#index', :as => :index
  # post '/actualizar_perfil' => 'usuarios#actualizar_perfil'
  # the rest goes to root

  # TODO ver la redireccion de todo y la de las partes no autorizadas
  get '*path' => 'application#index'
end
