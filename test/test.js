test("단어를 추출할 수 있다.", function() {
	// Given: 어떤 상황
	var paragraph1 = "I am a boy";
	var paragraph2 = "I am a boy. and You also boy.";

	// When: 어떤 동작
	var words1 = WordExtractor.extract(paragraph1);
	// var words2 = WordExtractor.extract(paragraph2);
	// WordExtractor.foo();

	// Then: 어떤 결과 
	deepEqual(words1, {'boy': 1});
	// deepEqual(words2, {'boy': 2});
	equal(1, 1);
});

test("Url을 제거할 수 있다.", function() {
	// Given: 어떤 상황
	var paragraph1 = "This is url http://www.google.com";

	// When: 어떤 동작
	var words1 = WordExtractor.extract(paragraph1);

	// Then: 어떤 결과 
	deepEqual(words1, {'url': 1});
});

test("스크립트를 제거할 수 있다.", function() {
	// Given: 어떤 상황
	var paragraph1 = "This is script<script></script>";

	// When: 어떤 동작
	var words1 = WordExtractor.extract(paragraph1);

	// Then: 어떤 결과 
	deepEqual(words1, {'script': 1});
});

test("공백을 제거할 수 있다.", function() {
	// Given: 어떤 상황
	var paragraph1 = "   I    am a  boy          ";
	var paragraph2 = "   I    am a  boy          girl";

	// When: 어떤 동작
	var words1 = WordExtractor.extract(paragraph1);
	var words2 = WordExtractor.extract(paragraph2);

	// Then: 어떤 결과 
	deepEqual(words1, {'boy': 1});
	deepEqual(words2, {'boy': 1, 'girl': 1});
});
