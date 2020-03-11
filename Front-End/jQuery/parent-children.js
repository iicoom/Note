{/* <tr>
	<td class='col-md-2 text-center'><%= seven[i].D %></td>
	<td class='col-md-2 text-center'><%= seven[i].I %></td>
	<td class='col-md-2 text-center'><input class="form-control" type="number" min="0" value="<%= seven[i].N %>"></td>
	<td class='col-md-2 text-center'>
			<% if(seven[i].T){ %>
			<%= new Date(parseInt(seven[i].T) * 1000).Format("yyyy-MM-dd hh:mm") %>
			<% } %>
	</td>
	<td class='col-md-2 text-center'>
			<%= seven[i].R %>
	</td>
	<td>
		<button type="button" class="btn btn-primary btn-sm"
						data-id="<%= seven[i].I %>"
						onclick="debugSevenQuest(this, true)"><%= localizationData.EditProgress %></button>
		<button type="button" class="btn btn-primary btn-sm"
						data-id="<%= seven[i].I %>"
						onclick="debugSevenQuest(this)"><%= localizationData.OneKeyFinish %></button>
	</td>
</tr> */}

const num = $($(e).parent().siblings()[2]).children().val()