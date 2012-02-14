RM = rm
TARGET = build
KHAN = ../khan-exercises

all: target

clean:
	- $(RM) -rf build
	- $(RM) *~
	- $(RM) Modules/*~
	- $(RM) Doc/*~
	- $(RM) Scripts/*~
	- $(RM) modules.json

target:
	-mkdir $(TARGET)
	cp Modules/*.css $(TARGET)
	cp Modules/MIT-license.html $(TARGET)
	-mkdir $(TARGET)/Images
	cp Modules/Images/* $(TARGET)/Images
	cp khan-site.html $(KHAN)/exercises
	python Scripts/preprocessor.py  -c="OpenDSA Test Textbook" Modules/ $(TARGET)
