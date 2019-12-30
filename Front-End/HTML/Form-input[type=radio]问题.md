## Form 中的radio问题
```html
<tr style="text-align: center">
  <td width="50"><input type="text" class="form-control" name="serverId" value="<%= i.serverId %>" onblur="inputHandler(this)" disabled></td>
  <td>
    <input type="radio" data-name="godMode" name="<%= i.id %>" value="1" onclick="radioHandler(this)" <% if(i.godMode == 1){ %> checked <% } %> /><%= localizationData.OFF %>
    <input type="radio" data-name="godMode" name="<%= i.id %>" value="0" onclick="radioHandler(this)" <% if(i.godMode == 0){ %> checked<% } %> /><%= localizationData.ON %>
  </td>
  <td width="80">
    <input type="number" name="increaseTimes" class="form-control" value="<%= i.increaseTimes %>" onblur="inputHandler(this)">
  </td>
  <td>
    <input type="radio" data-name="iosFunctionSwitch" name="<%= i.id+'a' %>" value="1" <% if(i.iosFunctionSwitch == 1){ %> checked <% } %> onclick="radioHandler(this)" /><%= localizationData.OFF %>
    <input type="radio" data-name="iosFunctionSwitch" name="<%= i.id+'a' %>" value="0" <% if(i.iosFunctionSwitch == 0){ %> checked<% } %> onclick="radioHandler(this)" /><%= localizationData.ON %>
  </td>
  <td>
    <input type="radio" data-name="whitePlayer" name="<%= i.id+'b' %>" value="1" <% if(i.whitePlayer == 1){ %> checked <% } %> onclick="radioHandler(this)" /><%= localizationData.OFF %>
    <input type="radio" data-name="whitePlayer" name="<%= i.id+'b' %>" value="0" <% if(i.whitePlayer == 0){ %> checked<% } %> onclick="radioHandler(this)" /><%= localizationData.ON %>
  </td>
  <td>
    <input type="radio" data-name="payment" name="<%= i.id+'c' %>" value="1" <% if(i.payment == 1){ %> checked <% } %> onclick="radioHandler(this)" /><%= localizationData.OFF %>
    <input type="radio" data-name="payment" name="<%= i.id+'c' %>" value="0" <% if(i.payment == 0){ %> checked<% } %> onclick="radioHandler(this)" /><%= localizationData.ON %>
  </td>
 <tr/>
  ```
  如上，table多行中出现多组相同名称的redio，在点击时就会出现异常，去掉name 就会无法点击，所以不同组的radio只能给出不同的name
