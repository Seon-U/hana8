package com.hana8.demo.common.serializer;

import tools.jackson.core.JacksonException;
import tools.jackson.core.JsonGenerator;
import tools.jackson.databind.SerializationContext;
import tools.jackson.databind.ser.std.StdSerializer;

public class CardNoSerializer extends StdSerializer<String> {
	protected CardNoSerializer() {
		super(String.class);
	}

	@Override
	public void serialize(String value, JsonGenerator gen, SerializationContext provider) throws JacksonException {
		if (value == null) {
			gen.writeNull();
			return;
		}
		gen.writeString(format(value.replaceAll("[\\s-]",  "")));
	}

	private String format(String cardNo) {
		return cardNo.replaceAll("(\\d{4})(\\d{2})(\\d{6})(\\d{4})", "$1-$2**-****-$4");                   // 1588-1234
	}
}
