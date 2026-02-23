require 'date'

desc "compile and run the site"
task :default do
  pids = [
    spawn("bundle exec jekyll server -w"),
    spawn("scss --watch _assets:stylesheets"),
    spawn("coffee -b -w -o javascripts -c _assets/*.coffee")
  ]
 
  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end
 
  loop do
    sleep 1
  end
end


desc 'create a new draft post with image folder'
task :post do
  title = ENV['TITLE']
  slug = "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"
  image_folder_name = title.downcase.gsub(/[^\w]+/, '-').gsub(/-+$/, '')

  # Create post file
  file = File.join(File.dirname(__FILE__), '_posts', slug + '.markdown')
  File.open(file, "w") do |f|
    f << <<-EOS.gsub(/^    /, '')
    ---
    layout: post
    title: #{title}
    published: true
    description:
    keywords:
    tags:
    ---

    EOS
  end

  # Create image folder with index.html to block directory browsing
  image_dir = File.join(File.dirname(__FILE__), 'assets', 'images', 'posts', image_folder_name)
  FileUtils.mkdir_p(image_dir)
  index_file = File.join(image_dir, 'index.html')
  File.open(index_file, "w") do |f|
    f << <<-EOS.gsub(/^    /, '')
    ---
    permalink: /assets/images/posts/#{image_folder_name}/
    sitemap: false
    ---
    <script>window.location.replace('/404.html');</script>
    EOS
  end

  puts "Created post: #{file}"
  puts "Created image folder: #{image_dir}"
  system ("#{ENV['EDITOR']} #{file}") if ENV['EDITOR']
end
