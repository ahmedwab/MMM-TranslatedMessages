# Module: MMM-TranslatedMessages

The `MMM-TranslatedMessages` module translates a given list of messages that the user inputs to the desired language that is configured.

<img src="images/screenshot.png" alt="Display">

## Installing the module
Access your Magic Mirror/modules folder
```sh

cd ~/MagicMirror/modules/

```
CLone this repository in the modules folder
```sh
git clone https://github.com/ahmedwab/random_quotes
```

## Retrieving a Google API KEY

	<ol>
		<li>Go to the following website https://cloud.google.com/translate</li>
		<li>You will want to create a new project</li>
		<li>With the new project, visit API & Services</li>
		<li>Enable Google Translate API</li>
		<li>Create a new API key</li>
		<li> Store/Copy your API key for the next part </li>
	</ol>


## Using the module
You will need to make adjustments in your  `config/config.js` file:
````javascript
modules: [
			{
				module: 'MMM-TranslatedMessages',
				position: 'top_right',
				config: {
					intervalTime: 5, //Time interval between messages
					fade: 3, //Time in Seconds it takes to fade away each message
					Messages:[ //Messages you want to input to be translated
						"Hello World","What is up" , "How is it going", "Nice Weather Today"
					],
					API_KEY:"GOOGLE_TRANSLATE_API_KEY", //Google translation API Key
					targetLanguage:"fr",	 //Target Language Ex: fr for French
					fontSize: "1.1em" //Font Size of the text
				}
			}
]
````

## Configuration options
The `random_quotes` module allows you to pick quotes randomly from all the provided categories, or you can
set it to only use one category. Specifying multiple categories is curently not supported.

<table>
	<thead>
		<tr>
			<th>Options</th>
			<th>Description</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>intervalTime</code></td>
			<td>Time interval between messages <strong>Integer Value is in seconds.</strong></td>
			<td><code>5</code> seconds </td>
		</tr>
		<tr>
			<td><code>fade</code></td>
			<td>Time in Seconds it takes to fade away each message <strong>Integer Value is in seconds.</strong></td>
			<td><code>3</code> seconds </td>
		</tr>
		<tr>
			<td><code>Messages</code></td>
			<td>Messages to be translated <strong>(Array type)</strong></td>
			<td><code> Messages:[ //Messages you want to input to be translated
						"Hello World","What is up" , "How is it going", "Nice Weather Today"</code>  </td>
		</tr>
		<tr>
			<td><code>targetLanguage</code></td>
			<td>Language the messages should be translated to<strong>Example: French = fr</strong></td>
			<td><code> "en"</code>  </td>
		</tr>
		<tr>
			<td><code>fontSize</code></td>
			<td>Font Size of the displayed messages</td>
			<td><code> "1.1em"</code>  </td>
		</tr>
	</tbody>
</table>

## Stylesheet

Stylesheet could be found under MMM-TranslatedMessages.css

Any style changes can be produced there

<!-- CONTRIBUTING -->
## Contributing

Contributing is greatly encouraged.

1. Fork the Project
2. Create your Feature Branch 
3. Commit your Changes 
4. Push to the Branch 
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
