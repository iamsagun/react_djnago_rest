
from branch.models import Branch
from .serializers import BranchSerializer
from rest_framework import viewsets

class BranchViewSet(viewsets.ModelViewSet):
    serializer_class=BranchSerializer
    queryset=Branch.objects.all()



# #from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView,
#     DestroyAPIView,
#     UpdateAPIView
# )    

#class BranchListView(ListAPIView):
#    queryset = Branch.objects.all()
#   serializer_class = BranchSerializer


#class BranchDetailsView(RetrieveAPIView):
#    queryset = Branch.objects.all()
#    serializer_class = BranchSerializer


#class BranchCreateView(CreateAPIView):
#    queryset = Branch.objects.all()
#    serializer_class = BranchSerializer

#class BranchUpdateView(UpdateAPIView):
#    queryset = Branch.objects.all()
#    serializer_class = BranchSerializer

#class BranchDeleteView(DestroyAPIView):
#    queryset = Branch.objects.all()
#    serializer_class = BranchSerializer




