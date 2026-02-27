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
		String replStr = value.replaceAll("[\\s-]", "");
		// 2️⃣ 앞 6자리 이후 ~ 마지막 4자리 전까지 마스킹
		String masked = replStr
			.replaceAll("(?<=\\d{6})\\d(?=\\d{4})", "*");

		// 3️⃣ 4자리 단위 대시 추가
		String formatted = masked
			.replaceAll("(?<=\\G....)(?=.)", "-");

		gen.writeString(formatted);
	}
}
