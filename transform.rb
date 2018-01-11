$htmlMap = { 
	"wx:" => "a:",
	"bindtap=" => "onTap=",
	"bindlongTap=" => "onLongTap=",
	"bindinput=" => "onInput=",
	"bindchange=" => "onChange=",
	"bindfocus=" => "onFocus=",
	"bindblur=" => "onBlur=",
	"bindconfirm=" => "onConfirm=",
	"bindsubmit=" => "onSubmit=",
	"bindreset=" => "onReset=",
	"bindtouchstart=" => "onTouchStart=",
	"bindtouchmove=" => "onTouchMove=",
	"bindtouchend=" => "onTouchEnd=",
	"bindtouchcancel=" => "onTouchCancel=",
	"bindlongtap=" => "onLongTap=",
	"bindmarkertap=" => "onMarkerTap=",
	"bindcallouttap=" => "onCalloutTap=",
	"bindcontroltap=" => "onControlTap=",
	"bindregionchange=" => "onRegionChange=",
	"canvas-id" => "id",
	"bind=" => "on=",
}

$jsonMap = {
	"navigationBarBackgroundColor" => "titleBarColor",
	"navigationBarTitleText" => "defaultTitle",
	"enablePullDownRefresh" => "pullRefresh",
	"disableScroll" => "allowsBounceVertical",
	"color" => "textColor",
	"list" => "items",
	"text" => "name",
	"iconPath" => "icon",
	"selectedIconPath" => "activeIcon",
}

def transformProject path
	transformJson "#{path}/app.json"
	transformCss "#{path}/app.wxss"
	transformPages "#{path}/pages"
end

def transformPages pages
	Dir.foreach(pages) { |x| transformPage("#{pages}/#{x}") unless x.start_with?(".")  }
end

def transformPage page
	page_path = page.split("/")[-1]
	transformHtml "#{page}/#{page_path}.wxml"
	transformJson "#{page}/#{page_path}.json"
	transformCss "#{page}/#{page_path}.wxss"
end

def transformHtml html
	content = File.read(html)
	$htmlMap.each do |k, v| 
		content.gsub! k, v
	end
	File.write(html, content)
	File.rename(html, "#{html.split('.').first}.axml")
end

def transformJson json
	content = File.read(json)
	$jsonMap.each do |k, v| 
		content.gsub! k, v
	end
	File.write(json, content)
end

def transformCss css
	File.rename(css, "#{css.split('.').first}.acss")
end

paths = ARGV.map { |p| File.expand_path(p)}

paths.each do |path|
	 if File.exist?(path + "/app.js") 
	 	p "start transforming #{path}"
		transformProject path	 	
	 	p "#{path} transform completed"
	 else
	 	p "#{path} is not a mini program dir"
	 end
end


